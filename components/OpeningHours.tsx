"use client";

import { Clock } from "lucide-react";

/**
 * Opening Hours Component
 * 
 * Displays restaurant operating hours.
 * Update hours in this component if they change.
 */

interface HoursData {
  day: string;
  hours: string;
  isToday?: boolean;
}

const openingHours: HoursData[] = [
  { day: "Monday", hours: "7:00 AM - 1:00 AM" },
  { day: "Tuesday", hours: "7:00 AM - 1:00 AM" },
  { day: "Wednesday", hours: "7:00 AM - 1:00 AM" },
  { day: "Thursday", hours: "7:00 AM - 1:00 AM" },
  { day: "Friday", hours: "7:00 AM - 1:00 AM" },
  { day: "Saturday", hours: "7:00 AM - 1:00 AM" },
  { day: "Sunday", hours: "7:00 AM - 1:00 AM" },
];

export default function OpeningHours() {
  const today = new Date().getDay();
  const currentDayIndex = today === 0 ? 6 : today - 1; // Convert Sunday (0) to index 6

  return (
    <div className="rounded-xl border border-dark-border bg-dark-card p-4 sm:p-6">
      <div className="mb-4 flex items-center space-x-3">
        <div className="rounded-full bg-primary/20 p-2">
          <Clock className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-display text-lg sm:text-xl font-bold text-primary">Opening Hours</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {openingHours.map((schedule, index) => (
          <div
            key={schedule.day}
            className={`group flex items-center justify-between rounded-lg px-3 py-2 sm:py-2.5 transition-all duration-500 hover:translate-x-1 hover:scale-[1.02] text-sm sm:text-base ${
              index === currentDayIndex
                ? "bg-primary/10 border border-primary/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                : "bg-dark-surface border border-transparent hover:border-primary/20 hover:bg-dark-card"
            }`}
          >
            <span
              className={`font-medium transition-all duration-500 ${
                index === currentDayIndex 
                  ? "text-primary" 
                  : "text-white group-hover:text-primary"
              }`}
            >
              {schedule.day}
              {index === currentDayIndex && (
                <span className="ml-2 text-xs text-primary">
                  (Today)
                </span>
              )}
            </span>
            <span
              className={`text-xs sm:text-sm font-medium transition-all duration-500 ${
                index === currentDayIndex 
                  ? "text-primary" 
                  : "text-dark-muted group-hover:text-primary"
              }`}
            >
              {schedule.hours}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
                </span>
              )}
            </span>
            <span
              className={`text-sm transition-all duration-500 ${
                index === currentDayIndex 
                  ? "text-primary font-semibold" 
                  : "text-dark-muted group-hover:text-primary/80"
              }`}
            >
              {schedule.hours}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
