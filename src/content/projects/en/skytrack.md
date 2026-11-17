---
title: Customer portal for satellite tracking
summary: A web platform where each customer sees their fleet on a map, receives alerts and downloads trip reports.
client: SkyTrack
industry: Technology & logistics
year: 2025
category: Web app
services: [aplicaciones-web, diseno-ui-ux]
duration: 4 months
team: UI/UX design and full-stack development
status: In production
stack: [React, TypeScript, Python, PostgreSQL, Maps, WebSockets]
cover: ../../../assets/projects/skytrack.png
order: 5
metrics:
  - { value: '1', label: 'Portal for fleet, alerts and reports' }
  - { value: '<5 s', label: 'To see each vehicle’s latest position' }
  - { value: '4', label: 'Months from prototype to production' }
  - { value: '0', label: 'Reports assembled by hand by support' }
problem: Customers checked their vehicles’ location in an old tool that was hard to use on a phone, and requested trip reports by phone. The support team spent a large part of the day producing those reports.
solution: A modern portal with a real-time map, trip history, per-vehicle configurable alerts and downloadable reports. Each customer logs in with their own account and sees only their fleet.
process:
  - title: Interviews with customers and support
    text: We identified the five tasks behind almost every inquiry and put them at the center of the design.
  - title: Map prototype
    text: We tested different ways in Figma to show many vehicles at once without cluttering the screen, especially on mobile.
  - title: An API over the existing platform
    text: We built Python services that read device data and expose it cleanly to the new portal.
  - title: Real time and reports
    text: Positions updated via WebSockets, history with trip playback and export to PDF and Excel.
  - title: Account migration
    text: Customers moved to the new portal in groups, with the old one available until the switch was complete.
decisions:
  - title: Mobile first
    text: Most lookups happen out on the road. The map, alerts and latest trip are one tap away on a phone.
  - title: Self-service reports
    text: Everything support used to produce by hand, the customer now downloads. The team is free for cases that really need a person.
  - title: Running alongside the old system
    text: The portal reads the same information as the existing platform, so there was no cut-over day and no risk of losing data.
  - title: Account and sub-account permissions
    text: Companies with several branches assign which vehicles each user sees, without asking support.
highlights:
  - Fleet visible in real time from any device
  - Speed, zone and ignition alerts configured by the customer
  - Downloadable reports without calling support
  - Migration in groups with no service interruption
learnings:
  - On a map, showing less is almost always showing better
  - Every report a customer downloads is one less phone call
---

SkyTrack already had the tracking technology; what it lacked was a modern way to put it in its customers’ hands. The project focused on the experience: anyone should be able to find their vehicle and their report without instructions.
