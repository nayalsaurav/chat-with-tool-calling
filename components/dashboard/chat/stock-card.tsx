import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StockPriceOutput } from "@/types";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Calendar,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const StockCard = ({ stockData }: { stockData: StockPriceOutput }) => {
  if (!stockData) return null;

  const isPositive = stockData.change >= 0;
  const ChangeIcon = isPositive ? TrendingUp : TrendingDown;
  const changeColor = isPositive ? "text-emerald-600" : "text-red-600";
  const bgChangeColor = isPositive
    ? "bg-emerald-100 dark:bg-emerald-500/10"
    : "bg-red-100 dark:bg-red-500/10";

  return (
    <Card className="w-full max-w-md overflow-hidden border-t-4 border-t-primary">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-3xl font-black tracking-tight">
              {stockData.symbol}
            </CardTitle>
            <CardDescription className="text-xs font-medium uppercase tracking-wider mt-1">
              Stock Price
            </CardDescription>
          </div>
          <div
            className={cn(
              "flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold",
              bgChangeColor,
              changeColor,
            )}
          >
            <ChangeIcon className="w-3 h-3" />
            {isPositive ? "+" : ""}
            {stockData.changePercent.toFixed(2)}%
          </div>
        </div>
      </CardHeader>

      <CardContent className="grid gap-6">
        <div className="flex flex-col">
          <span className="text-4xl font-bold flex items-start">
            <span className="text-lg text-muted-foreground mt-1 mr-1">$</span>
            {stockData.price.toFixed(2)}
          </span>
          <span
            className={cn(
              "text-sm font-semibold flex items-center gap-1 mt-1",
              changeColor,
            )}
          >
            {isPositive ? "+" : ""}
            {stockData.change.toFixed(2)} Today
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
              <Activity className="w-3 h-3" /> Volume
            </span>
            <span className="text-sm font-medium tabular-nums">
              {stockData.volume.toLocaleString()}
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
              <Clock className="w-3 h-3" /> Prev. Close
            </span>
            <span className="text-sm font-medium tabular-nums">
              ${stockData.previousClose.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="pt-2 border-t flex justify-between items-center text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            Last Traded
          </span>
          <span className="font-medium">{stockData.latestTradingDay}</span>
        </div>
      </CardContent>
    </Card>
  );
};
