// app/api/waitlist/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import EmailTemplate from '@/components/email-template'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

console.log("Supabase client created")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log("Body received:", body)
    const { name, email, profession, comments } = body

    // Validación básica
    if (!name || !email || !profession) {
      return NextResponse.json(
        { error: 'Nombre, email y profesión son requeridos' },
        { status: 400 }
      )
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Insertar en Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .insert({
        name,
        email: email.toLowerCase(),
        profession,
        comments: comments || null,
        status: 'pending',
      })
      .select()
      .single()

    if (error) {
      // Email duplicado
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Este email ya está registrado' },
          { status: 409 }
        )
      }
      
      console.error('Error:', error)
      return NextResponse.json(
        { error: 'Error al registrar' },
        { status: 500 }
      )
    }

    // Enviar email de bienvenida
    try {
      const firstName = name.split(' ')[0] // Obtener el primer nombre
      
      await resend.emails.send({
        from: 'DoctorMind <admin@doctormind.io>',
        to: [email],
        subject: '¡Bienvenido a DoctorMind! 🎉',
        react: EmailTemplate({ firstName }),
      })
      
      console.log('Email de bienvenida enviado a:', email)
    } catch (emailError) {
      // Log del error pero no fallar la petición
      console.error('Error al enviar email:', emailError)
      // Continuamos aunque el email falle
    }

    return NextResponse.json({
      success: true,
      message: 'Registro exitoso',
      data: { id: data.id }
    }, { status: 201 })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
