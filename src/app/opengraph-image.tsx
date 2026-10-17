import { ImageResponse } from 'next/og';

export const alt = 'Morello Portfolio — Crafting Visuals That Tell Stories';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#FAFAFA',
          backgroundImage: 'linear-gradient(135deg, #FAFAFA 0%, #E7EDFF 60%, #F3E8FF 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 28px',
            borderRadius: '999px',
            backgroundColor: '#EFF4FF',
            border: '1px solid #DBEAFE',
            color: '#2563EB',
            fontSize: '22px',
            fontWeight: 600,
            letterSpacing: '0.08em',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '999px',
              backgroundColor: '#2563EB',
            }}
          />
          OPEN FOR FREELANCE
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '78px', fontWeight: 800, color: '#1D1D1F', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Crafting Visuals
          </div>
          <div style={{ fontSize: '78px', fontWeight: 800, color: '#2563EB', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            That Tell Stories
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '30px', fontWeight: 700, color: '#1D1D1F' }}>
              Danadyaksa Morello Hisyam Prayata
            </div>
            <div style={{ fontSize: '24px', color: '#6B7280' }}>
              Graphic Designer · UI/UX · Web Developer
            </div>
          </div>
          <div style={{ fontSize: '24px', color: '#9CA3AF' }}>morello-portfolio.vercel.app</div>
        </div>
      </div>
    ),
    size
  );
}
