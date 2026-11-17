---
title: Website and online booking for an auto detailing center
summary: A website with a service catalog, a quote calculator by vehicle type and appointment booking connected to WhatsApp.
client: Autonova
industry: Automotive
year: 2025
category: Website
services: [desarrollo-web, automatizacion-ia]
duration: 5 weeks
team: Design and development
status: In production
stack: [Astro, Tailwind, Supabase, n8n, WhatsApp Business API]
cover: ../../../assets/projects/autonova.png
order: 6
metrics:
  - { value: '5', label: 'Weeks from brief to launch' }
  - { value: '3', label: 'Steps to book an appointment' }
  - { value: '24/7', label: 'Bookings open with no phone calls' }
problem: Appointments were coordinated through messages and calls. There were scheduling clashes, no-shows and a lot of time spent explaining what each service includes and how much it costs depending on the vehicle.
solution: A site that explains each service with before-and-after photos, calculates a reference price by vehicle type and lets customers book in three steps. The booking is confirmed and reminded automatically via WhatsApp.
process:
  - title: Services and prices
    text: We organized the offer into clear packages and defined pricing rules by vehicle size.
  - title: Design
    text: A dark look with the brand’s blue and plenty of room for photos of finished work.
  - title: Bookings
    text: A calendar with real availability per work bay, so two customers can’t take the same slot.
  - title: Reminders
    text: Confirmation on booking and a reminder the day before via WhatsApp, with the option to reschedule.
decisions:
  - title: Visible reference price
    text: Showing a range before booking filtered out inquiries and brought in customers who already knew what they would pay.
  - title: Availability checked on the server
    text: The slot is validated on confirmation, not when the calendar is shown. No double bookings, even if two people choose at the same time.
  - title: Automatic reminders
    text: An n8n workflow sends the messages. Fewer no-shows without anyone having to remember to write.
highlights:
  - Bookings with no calls or back-and-forth messages
  - Fewer missed appointments thanks to reminders
  - Services and prices explained before the first contact
learnings:
  - A well-shot before-and-after sells more than any copy
  - The shorter the booking flow, the more bookings get completed
---

Autonova wanted booking a detail to be as easy as ordering food delivery. The site was designed around a single action: booking.
