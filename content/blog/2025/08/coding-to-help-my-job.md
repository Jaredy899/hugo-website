---
title: "Coding to Help My Job"
description: "Using AI to create a website to assist my work in mental health"
pubDate: 2025-08-31
draft: false
---

## Revolutionizing Case Management: How Convex Chef and Cursor Helped Me Build a Custom Client Tracker

As a case manager, staying on top of client needs, deadlines, and communication is paramount. Treatment plans, quarterly reviews, last contacts, and face-to-face meetings all have critical due dates that, if missed, can impact client well-being and compliance. Beyond client well-being, **the accuracy and timeliness of our paperwork are directly tied to Medicaid compliance and, ultimately, our ability to secure funding for the vital services we provide.** While off-the-shelf solutions exist, I often found them clunky, overly complex, or lacking the specific functionalities I needed. That's why I embarked on a journey to build my own personalized case management website, and the AI-powered tools Convex Chef and Cursor were absolute game-changers.

### The Challenge: Juggling Dates, Data, and Medicaid Mandates

My biggest headache was always the calendar. When was the next treatment plan due for Consumer A? Did I speak with Consumer B last week, and when is their quarterly review? Manually tracking these dates in spreadsheets was prone to errors and incredibly time-consuming. **Crucially, missed deadlines for treatment plans or quarterly reviews don't just impact client care; they can lead to significant auditing issues with Medicaid, potentially resulting in recoupments or even loss of provider status.** I needed a system that could:

* Store client (or "consumer") information securely.
* Automatically calculate crucial due dates based on initial input, with an eye towards **Medicaid-specific timelines.**
* Provide a clear overview of upcoming deadlines, **highlighting those critical for compliance.**
* Log interactions and track the frequency of contact to ensure we meet **contact requirements for billing.**

### Enter Convex Chef: My Backend Dream Weaver

![Chef](https://qmpdliftraf4pov3.public.blob.vercel-storage.com/Chef-ehjV6foFVrIZfXAW6jS4PIuFHPq0nD.webp)

When I discovered Convex Chef, I was intrigued. Advertised as an AI agent that builds full-stack web apps with a focus on backend logic, it promised to handle the "three Cs" that often trip up LLMs: concurrency, consistency, and caching. Convex is a hosted backend platform with a built-in reactive database, allowing developers to write database schemas and server functions in TypeScript. This real-time database means that any updates are instantly reflected in the front end, which was a huge selling point for me.

With Convex Chef, I could literally prompt it to create the core of my application. It understood my needs for storing consumer data, defining relationships between information (like a consumer and their treatment plan), and even setting up authentication. It automatically generated the database tables and server functions I needed, allowing me to define the different arguments and handlers for my server functions within the code. This meant less time wrestling with database configurations and more time focusing on the specific logic for my case management needs. Convex Chef essentially "cooked up" the foundational elements, including built-in user authentication and a dashboard to manage my data and logs.

For example, I could tell Chef: "Create a database schema for 'consumers' with fields for name, date of birth, intake date, and a related 'treatment plans' table that includes the start date and frequency." Chef handled the underlying data structure, making it incredibly easy to then build on top of.

### Cursor: My AI Pair-Programming Partner

While Convex Chef laid the robust backend, Cursor was my constant companion for the frontend and for refining the backend logic. Cursor is an AI-powered code editor, a fork of VSCode, designed for pair-programming with AI. Its standout feature is its AI-powered code generation, which can generate code, complete lines, and suggest improvements in real-time. What truly sets it apart is its ability to understand the entire codebase, providing context-aware suggestions.

This was invaluable. As I started building the user interface (using a simple HTML/Tailwind CSS stack), I could use Cursor's integrated chat to ask questions about my code, request explanations, or get help with debugging. For instance, I'd prompt Cursor with something like: "Generate a React component to display a consumer's details, including their treatment plan due date." Cursor would then provide relevant code, understanding the data structure I had set up with Convex.

One of the most powerful features I leveraged was Cursor's "Rules for AI" setting, which acts as a personal system prompt for the AI. I could set up rules like: "Always use clean, readable React components" or "Ensure all date calculations are handled in a specific utility file." This helped maintain consistency in my code and ensured the AI adhered to my preferred coding style.

For the complex calculations, like determining the next quarterly review date or treatment plan due date, I wrote specific TypeScript functions within my Convex backend. Cursor assisted me by:

* **Generating boilerplate:** When I needed a function to calculate a date, Cursor would often provide the initial structure, saving me valuable time.
* **Suggesting improvements:** As I wrote the logic, Cursor would suggest more efficient ways to handle date objects or refactor my code for better readability.
* **Debugging:** If I encountered an error in my date calculation, Cursor's integrated chat and codebase understanding helped me quickly identify and fix the issue. I could even feed it Convex documentation to improve its understanding of the platform.

### The Result: A Tailored Case Management Tool for Compliance

![CM](https://qmpdliftraf4pov3.public.blob.vercel-storage.com/Screenshot%202025-09-02%20131215.png)

With Convex Chef providing the powerful, real-time backend and Cursor acting as my intelligent coding assistant, I was able to build a functional and incredibly useful case management website. My custom solution now:

* **Tracks Consumers:** A clean interface allows me to add and manage all my consumer information.
* **Automates Due Dates with Compliance in Mind:** Based on the intake date and treatment plan frequency (e.g., annually, semi-annually), the system automatically calculates and displays the next treatment plan due date and quarterly review dates. **This direct calculation significantly reduces the risk of missing critical Medicaid deadlines, ensuring our documentation is always audit-ready.**
* **Manages Interactions for Billing and Oversight:** I can easily log the date and type of each interaction (phone call, face-to-face, email), and the system highlights when I last spoke with a consumer and when their next face-to-face meeting is due. **This detailed logging provides irrefutable evidence of services rendered and contact requirements met, crucial for Medicaid billing and preventing denials.**
* **Provides Overviews for Proactive Management:** A dashboard displays upcoming deadlines, allowing me to prioritize my workload and ensure no consumer falls through the cracks, **especially those with impending Medicaid-related documentation due dates.**

This project was a testament to the power of AI in democratizing software development. I'm not a full-time developer, but with the intelligent assistance of Convex Chef and Cursor, I was able to create a tool that genuinely addresses my professional needs, saving me countless hours and improving the quality of my case management. **More importantly, it significantly bolstered my ability to maintain stringent Medicaid compliance, protecting our agency's funding and ensuring seamless client care.** If you're a professional looking to build a custom solution without being a coding expert, I highly recommend exploring the synergistic power of Convex Chef and Cursor. They truly help anyone "cook" up remarkable applications.
