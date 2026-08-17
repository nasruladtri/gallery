export const PixelLogo = ({ size = 44 }: { size?: number }) => (
    <svg viewBox="0 0 96 96" width={size} height={size} aria-hidden="true">
        <rect x="5" y="5" width="86" height="86" fill="#ffd700" stroke="#000" strokeWidth="6" />
        <rect x="15" y="16" width="26" height="12" fill="#fff4c2" />
        <rect x="21" y="72" width="32" height="8" fill="#c99700" />
        <text
            x="48"
            y="74"
            textAnchor="middle"
            fontFamily="var(--font-display), monospace"
            fontSize="60"
            fill="#e52521"
        >
            N
        </text>
    </svg>
);
