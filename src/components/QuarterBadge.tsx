interface QuarterBadgeProps{
    quarter: 1 | 2 | 3 | 4
}
export default function QuarterBadge({quarter}:QuarterBadgeProps) {
    const label = `q${quarter}`;
    return(
        <span className="inline-flex items px-3 py-1 rounded-full text-sm font-semibold bg-amber-800 border-amber-300"
        aria-label="Quarter"
        tittle= "Game Quarter">
            {label}
        </span>
    )
}