---
title: Algora, complete management for an optical store
summary: A custom system for patients, sales, inventory, lab orders and end-of-day cash closing.
client: Veo Optics
industry: Eye care
year: 2025
category: Web app
services: [aplicaciones-web, diseno-ui-ux]
duration: 9 months
team: Design and full-stack development
status: In production
stack: [React, Supabase, PostgreSQL, JavaScript, Tailwind]
cover: ../../../assets/projects/algora-cover.png
featured: true
order: 2
metrics:
  - { value: '5', label: 'Modules: patients, sales, lab, inventory and cash' }
  - { value: '1', label: 'Tool replacing notebooks and spreadsheets' }
  - { value: '0', label: 'Servers of their own to maintain' }
  - { value: '9', label: 'Months working side by side with the business' }
problem: The store tracked patients, sales and inventory separately, and the cash register was balanced by hand at the end of the day. Finding a patient’s history or checking what was in stock took far too long.
solution: A system built around the counter. Registering a patient, making a sale, creating the lab order and updating inventory happen in a single flow, and the till is closed with what the system has already recorded.
process:
  - title: Watching the counter
    text: We spent time watching how staff served customers. The system had to follow the natural order of a sale, with no extra steps while a customer waits.
  - title: Clickable prototype
    text: We designed the main screens and tested them with the staff before writing code. Several ideas changed at this stage, when changing them was cheap.
  - title: Module-by-module build
    text: Patients and sales first, then lab, inventory and cash. Each module was used in the store before starting the next one.
  - title: Data and permissions in Supabase
    text: We modeled the database in PostgreSQL with role-based security policies, so each user accesses only what they should.
  - title: Go-live
    text: We migrated existing data, trained the team and fine-tuned details during the first weeks of real use.
decisions:
  - title: Supabase as the backend
    text: Authentication, database and permissions with no servers to maintain. For a small business, less infrastructure means fewer things that can break.
  - title: An interface of very few clicks
    text: Large icons and step-by-step guided flows. Whoever is at the counter shouldn’t need a manual to complete a sale.
  - title: The sale drives everything else
    text: A sale creates the lab order, updates inventory and feeds the till. Closing the day becomes a query, not a chore.
  - title: Security in the database
    text: Access rules are enforced with row-level policies in PostgreSQL, so they don’t depend on the frontend respecting them.
highlights:
  - Sales, inventory and cash in a single tool
  - Every patient’s history available in seconds
  - Cash closing generated from recorded sales
  - No servers of their own to manage
learnings:
  - Testing a prototype with real users saves weeks of development
  - At a counter, every extra click is felt
  - A managed backend frees up time for what the business actually notices
---

Algora was born from a concrete need at Veo Optics: to stop splitting the operation between notebooks, spreadsheets and memory. We handled the design, the React frontend and the database and backend modeling on Supabase.
