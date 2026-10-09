# CV rules (Yu Chiao Lin)

Standing rules for every tailored CV. Goal: pass ATS and match each job description at least 80%, using only true information.

## Deliverables for each job description
- CV in **English and French**, kept in the same Word layout as the base CV, on one page.
- A motivation letter in **English only**, when the job asks for one, based on the CV made for that job.
- Run the 4-step workflow below.

## Format rules
1. **Summary: 3 lines maximum.** Name the industries (luxury, beauty, cosmetics, fragrance) and Pure Trade's clients (L'Oréal Luxe, Puig, Guerlain, Sephora) so the ATS finds them. Never write "I work at Pure Trade" in the summary.
2. **Skills: exactly three categories, in this order:** Hard Skills, Soft Skills, Tools. Never add a "Supply Chain Skills" category, and never list the same skill twice.
3. **Education:** use the same line format for every school: `Program (ranked X, Source Year)`. Use a ranking you can verify.
   - KEDGE ISLI: ranked 2nd in France, Eduniversal 2026 (Logistics). An earlier version said "QS 2025", but it could not be verified.
   - Yuan Ze University: ranked 236th in Asia, QS Asia 2026 (1,156th in the QS World University Rankings 2026).
4. **Grammar:** proofread every line.
   - English: use the present tense for current roles (Pure Trade until January 2027) and the past tense for finished roles. Use British spelling throughout.
   - French: use noun phrases for bullets ("Suivi de…", "Gestion de…"), put a non-breaking space before `:` `;` `%`, and use gender-neutral job titles.
5. Never invent skills, metrics or results.

## 4-step workflow for each job description
1. **Diagnosis.** Give a match score, the 8–10 missing keywords and where each can truthfully go, five issues a recruiter would notice, and a review of each section. Flag gaps that wording alone cannot fix.
2. **Rewrite.** Rewrite each bullet as action + context or method + result, using job description terms only where the experience supports them. Write a 2–3 sentence summary and a cleaned-up skills section. Explain the changes first, then give copy-ready text.
3. **Review.** Check ATS readability, then give a recruiter's 6-second skim, ending with a prioritised list of edits.
4. **Mock interview.** Ask one question at a time: background and motivation, 3 role-specific questions, 2 behavioural questions and 1 question about working under pressure. Assess each answer with STAR. End with 3 areas to practise.

## Career targets (October 2026)
- **Industries:** luxury, cosmetics, food (FMCG), tech.
- **Roles:** Supply Planner, Production Tracker, Supply Chain Performance Analyst, Distribution Planner, Retail Planner (stretch). Also suggested: Demand Planner, Supply / Launch Coordinator, because they bridge supply chain and marketing.
- **Positioning:** finds data errors and fixes them (data reliability). Communicates well with people and enjoys brainstorming. Interested in marketing, but has no direct marketing experience.

## Confirmed facts: Pure Trade (July 2026 – January 2027)
- Leads weekly meetings with 4 suppliers on production plans and milestones, and works with the purchasing team.
- Processes 10–15 purchase orders and invoices per day in Dynamics 365. The volume depends on whether buyers have uploaded the PO documents. Follows up with buyers when data is missing.
- Checks KPIs every morning in Power BI and cleans the data in Excel.
- Measures finished products with their packaging and enters the data in L'Oréal's COSMO system.
- Builds palletization plans in Cape Pack (Esko), following each brand's maximum pallet height and weight.
- Monitors the in-office stock of BAT samples.
- 1,900+ historical order records cleaned. Tracks 100+ GWP/VIP orders. Ships by sea, air and road under FCA Incoterms.

## Job Search page
- Page: https://claude.ai/artifact/SxeioYhuzpPds4VhcYLVfm (source: `cv/tracker.html` and `cv/tracker-render.js`; the libraries and fonts are published files of the artifact; the data lives in its database collection `applications`).
- **New application tab:** paste a job description, and Claude runs Steps 1–3 from the base CV (`BASE_EN` / `BASE_FR` in `tracker-render.js`) plus the confirmed facts and rules. It writes the EN and FR CVs (Word and PDF, in the same layout as the base CV, fitted to one page) and an English motivation letter when the job asks for one. Then choose **I applied** / **Not applied yet** / **Discard**.
- **Applied tab:** status, CV files, job description, and Step 4 interview prep as PDFs in English, French and Chinese.
- **Saved tab:** tailored CVs that have not been sent yet.
- When the base CV or the confirmed facts change, update `BASE_EN`, `BASE_FR` and `FACTS` in `tracker-render.js` and republish the page.
- Each row records company, role, country, city, industry, contract, salary (and whether it is an estimate, posted in the job ad, or a real offer), status, date applied, match score before and after tailoring, the CV in English and French, the motivation letter, the Step 1–3 analysis and the interview prep.
