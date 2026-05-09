# CLAUDE.md — AI Resume Screener Tool

## Project Overview

**Project:** AI Resume Screener Tool for Indian HR Consultants
**Owner:** Abhijeet (AI Learners India)
**Goal:** Build a single-file HTML tool that helps Indian HR consultants and recruitment agencies score multiple resumes against a job description automatically.

---

## Indian Context Rules

All sample and placeholder data must follow Indian recruitment context:

- **Names:** Use Indian names (e.g., Rohit Kumar, Priya Sharma, Anand Pillai, Sneha Reddy, Arjun Mehta)
- **Companies:** Use Indian companies (TCS, Infosys, Wipro, Razorpay, Flipkart, Paytm, Zerodha, PhonePe)
- **Cities:** Use Indian cities (Bangalore, Pune, Hyderabad, Mumbai, Chennai, Indore, Ahmedabad)
- **Salary/Package:** Indian Rupees with LPA notation (e.g., 22 LPA)
- **Education:** Indian institutions (IIT, NIT, BITS, VIT, Anna University, IIIT)

---

## Tech Stack

- **Single HTML file** (`index.html`) with embedded CSS and JavaScript
- No external libraries except optional CDN-based fonts and PDF.js for PDF parsing
- No backend, no API calls — all logic must run in the browser
- Must work when opened directly in Chrome, Edge, or Safari

---

## Features (Build in This Order)

1. Two textareas: Job Description (left) and Resumes separated by `---` (right)
2. Score Resumes button
3. Smart parsing per resume: Name, Email, Phone, Years of Experience, Skills, Current Company, Education
4. Scoring algorithm (0–100):
   - 60 points — skill overlap with JD
   - 25 points — experience range match
   - 15 points — location match
5. Results sorted high-to-low with tier badges:
   - **Strong Match** — 80 and above
   - **Maybe** — 50 to 79
   - **Skip** — below 50
6. Expandable detail view per resume showing matched and missing skills
7. Export Shortlist as CSV
8. Professional UI with blue-purple gradient header and card layout, responsive
9. PDF file upload support using PDF.js (added in Prompt 5)

---

## Coding Rules

- Do not use any external API
- Code must be production-clean: well-commented, clearly sectioned, easy to modify
- All UI text in English (HR consultants prefer English UI)
- All sample and placeholder data must reflect realistic Indian recruitment scenarios
- **Do not change the scoring weights without explicit instruction from Abhijeet**

---

## File Structure

```
index.html   ← entire app lives here (HTML + CSS + JS embedded)
CLAUDE.md    ← this file
```

---

## Scoring Algorithm Reference

| Component         | Weight | Logic                                      |
|-------------------|--------|--------------------------------------------|
| Skill Overlap     | 60 pts | Matched skills from JD / Total JD skills   |
| Experience Match  | 25 pts | Candidate years within JD required range   |
| Location Match    | 15 pts | Candidate city matches JD preferred city   |
| **Total**         | **100**|                                            |

---

## Notes for AI Assistants

- Always preserve the scoring weights (60 / 25 / 15) unless Abhijeet explicitly changes them
- Keep everything in a single `index.html` file — do not split into multiple files
- Resume separator in the textarea is `---` (three dashes on a new line)
- PDF.js integration is deferred to Prompt 5 — do not add it earlier
