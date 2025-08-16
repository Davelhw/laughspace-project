# 🚀 Laughnya.com Roadmap (12–18 months)

---

## **Phase 1: Foundation (0–3 months)**
🎯 **Goal:** Launch a **working MVP** with Prisma + NestJS + Vue. No raw SQL yet.  
🎯 **Parallel:** Prep for Turing test (skills sharpen + portfolio projects).  

### Deliverables
- User accounts (JWT auth, profile, city/country info, DoB w/ hide option).
- Joke posting (text + image/video support).
- Voting (thumbs up/down).
- Commenting (threaded, max depth 2 for MVP).
- Simple groups (public vs private with moderator).
- Basic feed (newest + most upvoted).

---

## **Phase 1 Timeline (Weeks 1–12)**

- **Week 1–2**
  - Scaffold NestJS + Prisma backend with Postgres.
  - Scaffold Vue 3 + Tailwind frontend.
  - Set up auth (JWT), user model, migrations.
- **Week 3–4**
  - Implement joke CRUD API + frontend forms.
  - Add image/video upload (S3).
- **Week 5–6**
  - Voting API + frontend integration.
  - Basic feed with pagination (newest, most upvoted).
- **Week 7–8**
  - Comment system (depth 2).
  - Display comments on frontend.
- **Week 9–10**
  - Groups module (public/private).
  - Moderator roles.
- **Week 11–12**
  - Polish UI/UX.
  - Deploy MVP on AWS (EC2 + RDS + S3).

---

## **Phase 2: Growth Engine (3–6 months)**
🎯 **Goal:** Make Laughnya **usable, sticky, and fun**.  
🎯 **Parallel:** Be ready for Turing test → USD 6K+ optionality.  

### Deliverables
- User profiles with joke/comment history.
- Notifications (votes, replies, invites).
- Moderator tools (approve/reject jokes).
- Group system enforcement (public vs private).
- Analytics (DAU, joke views, votes/day).
- Infinite scroll feeds, mobile-first responsive layout.

---

## **Phase 2 Timeline (Weeks 13–24)**

- **Week 13–14**
  - User profiles with history pages.
- **Week 15–16**
  - Notifications (votes, replies).
- **Week 17–18**
  - Moderator dashboard (approve/reject jokes).
- **Week 19–20**
  - Group invite/approval workflow.
- **Week 21–22**
  - Basic analytics with Prisma queries + Postgres `date_trunc`.
- **Week 23–24**
  - Infinite scroll + responsive layout polish.

---

## **Phase 3: Smart Features (6–12 months)**
🎯 **Goal:** Add “wow” features → requires **raw SQL & optimization**.  

### Deliverables
- Trending feed (time-decay ranking).
- Full-text search (Postgres + GIN index).
- Comment threads with recursive CTE.
- Anti-abuse checks (spam/vote fraud detection).
- Moderation dashboard with SLA metrics.

---

## **Phase 3 Timeline (Weeks 25–48)**

- **Week 25–28**
  - Trending feed using raw SQL/materialized view.
- **Week 29–32**
  - Full-text search integration (GIN + pg_trgm).
- **Week 33–36**
  - Recursive CTE for deep comment threads.
- **Week 37–40**
  - Anti-abuse SQL checks + dashboards.
- **Week 41–44**
  - Advanced moderation queue with SLA.
- **Week 45–48**
  - Optimization, caching, indexing improvements.

---

## **Phase 4: Monetization & Scale (12–18 months)**
🎯 **Goal:** Make Laughnya **sustainable**.  

### Deliverables
- Monetization: AdSense, affiliate, premium subs, merch.
- Scaling infra: Redis/SQS, materialized views, Cloudflare/NGINX limits.
- Community: contests, social integrations, viral invites.

---

## **Phase 4 Timeline (Weeks 49–72)**

- **Week 49–52**
  - Add AdSense + affiliate links.
- **Week 53–56**
  - Premium subscription (Stripe/crypto support).
- **Week 57–60**
  - Merch/meme store MVP.
- **Week 61–64**
  - Redis caching + message queue for heavy ops.
- **Week 65–68**
  - Cloudflare rate limiting + infra hardening.
- **Week 69–72**
  - Community contests + social media integrations.

---

# 🧩 Integration with Personal Roadmap
- Current job with Daniel → stable income, loyalty maintained.
- Stay Healthy project → USD 8K one-time + USD 1.5K/month → funds infra costs.
- Turing prep (90 days) → skills sharpened + Laughnya modules.
- Laughnya MVP → personal life project + portfolio asset.

---

# 📌 Final Principles
1. **Prisma-first** for CRUD.
2. **Raw SQL later** (trending, search, analytics, deep threads).
3. **Ship MVP early** → perfection is enemy of progress.
4. **Leverage overlaps** → Turing prep = Laughnya practice.
5. **Keep ownership** → Laughnya = your asset, not just another client system.
