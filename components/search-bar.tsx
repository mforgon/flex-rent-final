"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useState } from "react"

export function SearchBar() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="flex w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-2">
      <div className="flex-1 min-w-0">
        <Input
          type="text"
          placeholder="Search for properties..."
          className="w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      <div className="flex items-center px-4 border-l border-r">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-[200px] justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Any Duration"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="pl-2">
        <Button className="px-8">Search</Button>
      </div>
    </div>
  )
} 