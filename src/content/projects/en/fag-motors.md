---
title: Digital catalog and AI sales assistant
summary: A motorcycle catalog with spec sheets and a WhatsApp assistant that answers, quotes and books test rides.
client: FAG Motors
industry: Automotive
year: 2026
category: Automation & AI
services: [automatizacion-ia, desarrollo-web]
duration: 7 weeks
team: Design, development and automation
status: In production
stack: [Astro, React, n8n, Claude, WhatsApp Business API, Supabase]
cover: ../../../assets/projects/fag-motors.png
featured: true
order: 3
metrics:
  - { value: '24/7', label: 'Answers to inquiries regardless of store hours' }
  - { value: '<1 min', label: 'Time to first reply on WhatsApp' }
  - { value: '40+', label: 'Models with spec sheets and financing' }
  - { value: '1', label: 'Shared inbox for the whole sales team' }
problem: Inquiries arrived via WhatsApp and Instagram at all hours, and the same questions about price, installments and availability came up again and again. After hours nobody answered, and many prospects went cold before talking to a salesperson.
solution: A fast web catalog with every model and an AI assistant connected to that same catalog. It answers with real data, calculates reference installments, books the test ride and hands the sales rep an already-qualified lead.
process:
  - title: Question mapping
    text: We reviewed hundreds of real conversations to identify what customers ask, in what order and where the sale was being lost.
  - title: The catalog as source of truth
    text: We loaded models, prices and spec sheets into a database that feeds both the website and the assistant.
  - title: Conversation design
    text: We defined the tone, the limits and the exact moment the assistant hands the conversation to a person, with full context.
  - title: Testing the hard cases
    text: Before opening it to the public, we tested it with ambiguous questions, haggling and out-of-scope requests.
  - title: Weekly tuning
    text: Every week we review conversations with the sales team and refine prompts and answers.
decisions:
  - title: One catalog for web and chat
    text: The assistant queries the same database the site displays. When a price changes, it changes everywhere at once.
  - title: The AI never makes up prices
    text: The model can only answer with catalog data. If it can’t find the information, it says so and offers to connect with a sales rep.
  - title: Hand-off with context
    text: The rep receives a summary with the model of interest, payment method and preferred time. They never start the conversation from scratch.
  - title: Static site, dynamic catalog
    text: Pages generated with Astro to load instantly, with catalog data updated from a simple admin panel.
highlights:
  - Instant replies at any time of day
  - Qualified leads with model, budget and schedule
  - A catalog the team updates on its own
  - Test rides booked without back-and-forth calls
learnings:
  - An assistant is only as good as the data it can access
  - Defining when the AI should not answer matters as much as training it
  - The best metric is how many conversations end in an appointment
---

FAG Motors sells in a market where the first contact is almost always a message. The project brought together two pieces they needed: a catalog that was finally up to date, and an assistant able to use it to serve customers the way their best salesperson would.
