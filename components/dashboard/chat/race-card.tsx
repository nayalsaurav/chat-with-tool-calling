import { CalendarDays, MapPin, Timer, Flag } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { F1MatchOutput } from "@/types";

export const RaceCard = ({ raceData }: { raceData: F1MatchOutput }) => {
  if (!raceData) return null;
  const sessions = raceData.sessions;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      weekday: "short",
    });
  };

  return (
    <Card className="w-full max-w-md overflow-hidden border-t-4 border-t-primary">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="font-mono">
            ROUND {raceData.round}
          </Badge>
          <span className="text-xs font-mono text-muted-foreground">
            {raceData.season}
          </span>
        </div>
        <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">
          {raceData.raceName}
        </CardTitle>
        <CardDescription className="flex items-center gap-1 font-medium">
          <MapPin className="w-3 h-3" /> {raceData.circuit.locality},{" "}
          {raceData.circuit.country}
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div className="flex items-center gap-4 rounded-lg bg-muted/50 p-3">
          <div className="bg-background p-2 rounded-md shadow-sm">
            <CalendarDays className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold">{raceData.race.localDate}</p>
            <p className="text-xs text-muted-foreground">
              Race Starts at {raceData.race.localTime}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <Timer className="w-3 h-3" /> Weekend Schedule
          </h4>
          <Separator />
          <div className="grid grid-cols-2 gap-y-3">
            {sessions.map((session) => (
              <div key={session.time} className="flex flex-col">
                <span className="text-[10px] font-bold text-muted-foreground uppercase">
                  {session.name}
                </span>
                <span className="text-sm font-medium">
                  {session.time ? formatDate(session.time) : "TBA"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex items-center gap-2 text-[10px] text-muted-foreground italic">
          <Flag className="w-3 h-3" />
          {raceData.circuit.name}
        </div>
      </CardContent>
    </Card>
  );
};
