import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

type NavigationButtonProps = {
  tooltipText: string;
  children: React.ReactNode;
  onClick: () => void;
};

export const NavigationButton = ({
  tooltipText,
  children,
  onClick,
}: NavigationButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={onClick}
            className="h-12 w-9 border-border-primary text-content-primary hover:bg-background-tertiary hover:border-border-secondary hover:text-content-primary focus-visible:ring-offset-0 focus-visible:ring-1 "
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-background-tertiary text-content-primary">
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
