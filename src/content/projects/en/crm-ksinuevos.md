---
title: A CRM ecosystem for a car dealership
summary: Three connected CRMs for sales, accounting and insurance, with automatic AI-powered lead capture.
client: KsiNuevos
industry: Automotive
year: 2026
category: CRM / ERP
services: [aplicaciones-web, automatizacion-ia]
duration: 6 months
team: Architecture, development and infrastructure
status: In production
stack: [React, TypeScript, PostgreSQL, n8n, AI, Linux]
cover: ../../../assets/projects/ksinuevos-crm.png
featured: true
order: 1
metrics:
  - { value: '3', label: 'CRMs connected to a single database' }
  - { value: '1', label: 'Single customer record shared by every team' }
  - { value: '0', label: 'Campaign leads typed in by hand' }
  - { value: '6', label: 'Months from discovery to production' }
problem: Sales, accounting and insurance worked in separate tools. Customer information was duplicated, campaign leads were copied by hand and follow-up depended on spreadsheets and each salesperson’s memory.
solution: A set of CRMs, one per department, on a shared database. Each team has its own workflow, but everyone sees the same customer. Leads come in on their own, classified by AI and assigned to a sales rep.
process:
  - title: Discovery
    text: We sat down with each department to map how they really worked, what data they shared without realizing it and where customer follow-up got lost.
  - title: Architecture and data model
    text: We defined a single model for customers, vehicles and deals that all three CRMs hang from, with roles and permissions per department so each team sees only what it needs.
  - title: Module-by-module development
    text: We started with sales, the most urgent area. Each module went to production as soon as it was ready, in short cycles with weekly feedback from users.
  - title: Lead automation
    text: We built n8n workflows that receive campaign leads, use an AI model to classify them by intent and record them in the CRM with the right sales rep.
  - title: Deployment and support
    text: We set up servers, backups and monitoring, and supported adoption with short training sessions and on-the-fly adjustments.
decisions:
  - title: One database, three applications
    text: Instead of three systems kept in sync, the CRMs share the same model. That way there’s never a question of which record is correct.
  - title: AI classifies, people decide
    text: The model suggests a lead’s intent and priority using a tightly scoped prompt and structured output, but the sales rep can always correct it. Those corrections are used to tune the prompt.
  - title: Permissions in the model, not the screen
    text: Access rules live in the database. Even if the interface changes, accounting never sees what it shouldn’t.
  - title: Small, frequent releases
    text: Shipping every week was how we caught what didn’t work early and kept the business’s trust.
highlights:
  - Three business areas working from the same information
  - Campaign leads in the CRM with no manual data entry
  - Every customer’s follow-up visible to the whole sales team
  - Infrastructure and backups documented and under internal control
learnings:
  - Understanding the real process matters more than any framework choice
  - AI automation works best when a person can correct it
  - Document as if another team will take over the system tomorrow
---

The dealership and its business units had grown faster than their tools. Beyond building the software, we took charge of the entire technology infrastructure: servers, networking and technical support, which gave us end-to-end control over how the system was deployed and maintained.
