"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { toast } from "@/components/ui/Toaster";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  Check,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface Booking {
  date: Date;
  time: string;
}

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let hour = 8; hour <= 18; hour += 2) {
    const time = `${hour}:00 - ${hour + 2}:00`;
    slots.push({
      time,
      available: Math.random() > 0.3,
    });
  }
  return slots;
};

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

export default function PortalPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [timeSlots] = useState<TimeSlot[]>(generateTimeSlots());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(year, month + direction, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const isDateSelectable = (day: number) => {
    const date = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && date.getDay() !== 0; // Not in past and not Sunday
  };

  const handleDateSelect = (day: number) => {
    if (isDateSelectable(day)) {
      setSelectedDate(new Date(year, month, day));
      setSelectedTime(null);
    }
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) return;

    const newBooking: Booking = {
      date: selectedDate,
      time: selectedTime,
    };

    setBookings([...bookings, newBooking]);
    setShowConfirmation(true);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    setSelectedDate(null);
    setSelectedTime(null);
    toast("Session booked successfully!", "success");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-peach/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-brand-black mb-4">
            Book Your Session
          </h1>
          <p className="text-lg text-brand-slate">
            Select a date and time for your studio session. Each session is 2
            hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="p-2 hover:bg-brand-peach/50 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-brand-slate" />
                  </button>
                  <CardTitle className="text-xl">
                    {monthNames[month]} {year}
                  </CardTitle>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="p-2 hover:bg-brand-peach/50 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-brand-slate" />
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Day names */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="text-center text-sm font-medium text-brand-slate py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Empty cells for days before the first day of month */}
                  {Array.from({ length: firstDay }).map((_, index) => (
                    <div key={`empty-${index}`} className="aspect-square" />
                  ))}

                  {/* Days of the month */}
                  {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1;
                    const isSelectable = isDateSelectable(day);
                    const isSelected =
                      selectedDate?.getDate() === day &&
                      selectedDate?.getMonth() === month &&
                      selectedDate?.getFullYear() === year;
                    const isToday =
                      new Date().getDate() === day &&
                      new Date().getMonth() === month &&
                      new Date().getFullYear() === year;

                    return (
                      <button
                        key={day}
                        onClick={() => handleDateSelect(day)}
                        disabled={!isSelectable}
                        className={cn(
                          "aspect-square flex items-center justify-center rounded-lg text-sm transition-all",
                          isSelectable
                            ? "hover:bg-brand-peach/50 cursor-pointer"
                            : "text-brand-slate/30 cursor-not-allowed",
                          isSelected &&
                            "bg-brand-bronze text-white hover:bg-brand-bronze",
                          isToday && !isSelected && "ring-2 ring-brand-bronze/30"
                        )}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Time slots */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-bronze" />
                  {selectedDate
                    ? `Available Times for ${selectedDate.toLocaleDateString()}`
                    : "Select a Date"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedDate ? (
                  <div className="space-y-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() =>
                          slot.available && setSelectedTime(slot.time)
                        }
                        disabled={!slot.available}
                        className={cn(
                          "w-full p-4 rounded-lg border text-left transition-all",
                          slot.available
                            ? "border-border hover:border-brand-bronze/50 cursor-pointer"
                            : "border-border/50 bg-muted cursor-not-allowed",
                          selectedTime === slot.time &&
                            "border-brand-bronze bg-brand-bronze/10"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={cn(
                              "font-medium",
                              slot.available
                                ? "text-brand-black"
                                : "text-brand-slate/50"
                            )}
                          >
                            {slot.time}
                          </span>
                          {!slot.available && (
                            <span className="text-xs text-brand-slate/50">
                              Booked
                            </span>
                          )}
                          {selectedTime === slot.time && (
                            <Check className="w-5 h-5 text-brand-bronze" />
                          )}
                        </div>
                      </button>
                    ))}

                    <Button
                      className="w-full mt-4"
                      disabled={!selectedTime}
                      onClick={handleBooking}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Confirm Booking
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12 text-brand-slate">
                    <Calendar className="w-12 h-12 mx-auto mb-4 text-brand-slate/30" />
                    <p>Select a date from the calendar to view available times.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Upcoming Bookings */}
        {bookings.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto mt-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-brand-black mb-6">
              Your Upcoming Sessions
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bookings.map((booking, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-brand-black">
                          {booking.date.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-sm text-brand-slate">
                          {booking.time}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-brand-peach flex items-center justify-center">
                        <Check className="w-5 h-5 text-brand-bronze" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && selectedDate && selectedTime && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-black/50 flex items-center justify-center z-50 p-4"
            onClick={closeConfirmation}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-peach flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-brand-bronze" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-brand-black mb-2">
                  Session Booked!
                </h3>
                <p className="text-brand-slate mb-6">
                  Your studio session has been confirmed.
                </p>

                <div className="bg-brand-peach/20 rounded-xl p-4 mb-6">
                  <p className="font-medium text-brand-black">
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-brand-bronze font-semibold">
                    {selectedTime}
                  </p>
                </div>

                <Button className="w-full" onClick={closeConfirmation}>
                  Done
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
