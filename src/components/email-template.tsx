import React from 'react';

// Componente EmailTemplate exportado como named export
export default function EmailTemplate({ firstName }: { firstName: string }) {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
    }}>
      {/* Header with Logo */}
      <div style={{
        backgroundColor: '',
        padding: '50px 20px 0px 20px',
        textAlign: 'center',
      }}>
        <img
          src="https://i.postimg.cc/Njq3LnrK/Doctor-Mind-Logo-Full-Color.png"
          alt="DoctorMind Logo"
          style={{
            height: '300px',
            maxWidth: '90%',
          }}
        />
      </div>

      {/* Content */}
      <div style={{
        padding: '10px 30px 0px 30px',
      }}>
        <h2 style={{
          color: '#1e293b',
          fontSize: '26px',
          marginBottom: '20px',
          fontWeight: '600',
        }}>
          Hola {firstName},
        </h2>

        <p style={{
          color: '#475569',
          fontSize: '16px',
          lineHeight: '1.6',
          marginBottom: '20px',
        }}>
          ¡Gracias por unirte a nuestra lista de espera! Estamos emocionados de tenerte como parte de la comunidad de DoctorMind.
        </p>

        <p style={{
          color: '#475569',
          fontSize: '16px',
          lineHeight: '1.6',
          marginBottom: '20px',
        }}>
          DoctorMind está revolucionando la manera en que los profesionales de la salud acceden a información médica. Pronto podrás disfrutar de:
        </p>

        <ul style={{
          color: '#475569',
          fontSize: '16px',
          lineHeight: '1.8',
          marginBottom: '30px',
          paddingLeft: '20px',
        }}>
          <li style={{ marginBottom: '8px' }}>Búsqueda rápida y precisa de información médica</li>
          <li style={{ marginBottom: '8px' }}>Respuestas basadas en evidencia científica</li>
          <li style={{ marginBottom: '8px' }}>Interfaz intuitiva diseñada para profesionales</li>
          <li>Acceso prioritario a nuevas funcionalidades</li>
        </ul>

        <div style={{
          backgroundColor: '#f1f5f9',
          borderLeft: '4px solid #0EA5E9',
          padding: '20px',
          marginBottom: '30px',
          borderRadius: '4px',
        }}>
          <p style={{
            color: '#1e293b',
            fontSize: '16px',
            margin: '0',
            fontWeight: '500',
          }}>
            Te mantendremos informado sobre nuestro lanzamiento y te daremos acceso temprano cuando estemos listos.
          </p>
        </div>

        <p style={{
          color: '#475569',
          fontSize: '16px',
          lineHeight: '1.6',
          marginBottom: '20px',
        }}>
          Mientras tanto, si tienes alguna pregunta o sugerencia, no dudes en responder a este correo.
        </p>

        <p style={{
          color: '#475569',
          fontSize: '16px',
          lineHeight: '1.6',
        }}>
          ¡Nos vemos pronto!
          <br />
          <strong style={{ color: '#1e293b' }}>El equipo de DoctorMind</strong>
        </p>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#f8fafc',
        padding: '30px 20px',
        textAlign: 'center',
        borderTop: '1px solid #e2e8f0',
      }}>
        <p style={{
          color: '#94a3b8',
          fontSize: '14px',
          margin: '0 0 10px 0',
        }}>
          © 2025 DoctorMind. Todos los derechos reservados.
        </p>
        <p style={{
          color: '#94a3b8',
          fontSize: '12px',
          margin: '0',
        }}>
          Estás recibiendo este correo porque te registraste en nuestra lista de espera.
        </p>
      </div>
    </div>
  );
};

// Componente de preview (opcional, para desarrollo)
const EmailPreview = () => {
  const [firstName, setFirstName] = React.useState('LISTENPORT');

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f1f5f9',
      padding: '40px 20px',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        marginBottom: '30px',
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '20px',
        }}>
          Preview del Email - DoctorMind
        </h1>
        
        <div style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '600',
            color: '#475569',
            marginBottom: '8px',
          }}>
            Nombre de prueba:
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              outline: 'none',
              boxSizing: 'border-box',
            }}
            placeholder="Ingresa un nombre..."
          />
        </div>
      </div>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
        <EmailTemplate firstName={firstName} />
      </div>

      <div style={{
        maxWidth: '800px',
        margin: '30px auto 0',
        textAlign: 'center',
        color: '#64748b',
        fontSize: '14px',
      }}>
        <p>👆 Este es exactamente cómo se verá tu email</p>
      </div>
    </div>
  );
};

