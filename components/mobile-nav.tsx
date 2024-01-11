"use client";

import { ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { NavItem, navs } from "./nav";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="sm:hidden">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-2">
          {navs.map(({ href, label }) => (
            <NavItem
              href={href}
              label={label}
              key={label}
              onClick={() => {
                setOpen(false);
              }}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
