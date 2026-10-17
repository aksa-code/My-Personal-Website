import { ImageResponse } from 'next/og';
import { portfolioData } from '../../data/projects';

export const alt = 'Project detail — Morello Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id.toString() === id);

  const title = project?.title ?? 'Morello Portfolio';
  const subtitle = project?.subtitle ?? '';
  const categories = project?.category ?? [];

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
          backgroundColor: '#1D1D1F',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(37, 99, 235, 0.35) 0%, rgba(29, 29, 31, 0) 55%)',
        }}
      >
        <div style={{ display: 'flex', gap: '14px' }}>
          {categories.map((cat) => (
            <div
              key={cat}
              style={{
                display: 'flex',
                padding: '12px 28px',
                borderRadius: '999px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#93C5FD',
                fontSize: '22px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {cat}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontSize: '64px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            {title}
          </div>
          {subtitle && (
            <div style={{ fontSize: '30px', color: '#9CA3AF', lineHeight: 1.4 }}>{subtitle}</div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: '26px', fontWeight: 600, color: '#FFFFFF' }}>Morello Portfolio</div>
          <div style={{ fontSize: '24px', color: '#6B7280' }}>morello-portfolio.vercel.app</div>
        </div>
      </div>
    ),
    size
  );
}
