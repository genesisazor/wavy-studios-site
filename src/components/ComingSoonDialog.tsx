import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface ComingSoonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ComingSoonDialog = ({ open, onOpenChange }: ComingSoonDialogProps) => {
  const [email, setEmail] = useState("");

  const handleNotify = () => {
    if (!email.trim()) {
      toast.error("Enter an email so we know where to reach you.");
      return;
    }

    const subject = encodeURIComponent("Notify me when the [WAVY] shop launches");
    const body = encodeURIComponent(
      `Please notify me when the [WAVY] shop is live.\n\nMy email: ${email}`,
    );
    window.location.href = `mailto:gazor.art@gmail.com?subject=${subject}&body=${body}`;

    toast.success("Thanks! We'll be in touch when the shop launches.");
    setEmail("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-foreground">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl">SHOP COMING SOON</DialogTitle>
          <DialogDescription className="font-body text-muted-foreground pt-2">
            We're not open for orders just yet. Leave your email if you'd like to know the
            second the shop goes live — totally optional, feel free to just close this instead.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleNotify();
            }}
            className="font-body"
          />
          <Button variant="bumper" onClick={handleNotify} className="shrink-0">
            Notify Me
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonDialog;
