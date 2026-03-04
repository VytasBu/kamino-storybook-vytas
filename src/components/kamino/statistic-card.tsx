import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface StatisticCardProps extends React.ComponentProps<typeof Card> {
  title: string
  subtitle?: string
  value: string
  additionalData?: {
    label: string
    value: string
    variant?: "default" | "success"
  }
}

function StatisticCard({
  title,
  subtitle,
  value,
  additionalData,
  className,
  ...props
}: StatisticCardProps) {
  return (
    <Card className={cn("w-[340px]", className)} {...props}>
      <CardHeader className="gap-1 pb-2">
        <h3 className="text-sm font-medium leading-none">{title}</h3>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </CardHeader>
      <CardContent className="flex items-end justify-between">
        <span className="text-2xl font-semibold tracking-tight">{value}</span>
        {additionalData && (
          <span
            className={cn(
              "text-xs font-medium",
              additionalData.variant === "success"
                ? "text-success"
                : "text-muted-foreground"
            )}
          >
            {additionalData.label}: {additionalData.value}
          </span>
        )}
      </CardContent>
    </Card>
  )
}

export { StatisticCard }
export type { StatisticCardProps }
