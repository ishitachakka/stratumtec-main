import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";
import { useState } from "react";

interface CalendarPopupProps {
  trigger: React.ReactNode;
  triggerAsChild?: boolean;
}

export const CalendarPopup = ({ trigger, triggerAsChild = false }: CalendarPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild={triggerAsChild}>
        {triggerAsChild ? trigger : (
          <Button onClick={() => setIsOpen(true)}>
            {trigger}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Agendar Reunião
          </DialogTitle>
        </DialogHeader>
        <div className="w-full">
          <iframe 
            src="https://calendar.zoho.com/zc/ui/embed/#calendar=zz08011230d49b355a5b7f590205831a437605d5e7622a8fad2db2fc3bddd65dfbaea3408c4b48b54c146f321f133cf2c55a93d75e&title=Agendar%20Reuni%C3%A3o&type=1&language=pt&timezone=America%2FSao_Paulo&showTitle=1&showTimezone=1&startingDayOfWeek=1&timeFormat=1&view=month&showDetail=0&theme=1&showAttendee=0&showSwitchingViews=1&expandAllday=0&eventColorType=light&calendarColor=%23EB0000&showAllEvents=0&showLogo=0" 
            title="Agendar Reunião"
            width="100%" 
            height="500" 
            frameBorder="0" 
            scrolling="no"
            className="w-full rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};