import{j as e,L as d}from"./index-DQGksYnc.js";import{N as l,R as u,F as h}from"./Reveal-hKb8TyC3.js";import{A as p}from"./arrow-right-x6QxAtF1.js";const m="June 2026",y=[{to:"/terms-of-service",label:"Terms of Service"},{to:"/refund-policy",label:"Refund Policy"}],g=[{title:"Who We Are and Scope",content:`This Privacy Policy describes how Shellvoide ("Shellvoide", "we", "us", or "our") handles personal data. Shellvoide is a cybersecurity company headquartered in Albuquerque, New Mexico, United States.

This policy covers:

• Our public website at shellvoide.com.
• The KLUE platform, our AI penetration testing service (the "Platform").
• Our professional security services, including penetration testing, red team operations, audits, training, and incident response.

For the purpose of the EU and UK General Data Protection Regulation (GDPR), Shellvoide is the **data controller** for the account, billing, and website data described below. Where you use KLUE to test your own systems, Shellvoide acts as a **data processor** that handles your content on your behalf. See "Our Role: Controller and Processor" for what that means.`},{title:"Our Role: Controller and Processor",content:`We handle two different categories of data in two different roles.

**Controller data.** When you create an account, subscribe to a plan, contact us, or browse our website, we decide why and how your personal data is processed. For this data we are the controller and this policy is our privacy notice to you.

**Processor data (your scan content).** When you run a scan, KLUE processes the targets and material you point it at, for example source code, cloud and Microsoft 365 configurations, web and API endpoints, and the findings generated from them. This content can include personal data belonging to your own users or employees. For this content you are the controller and Shellvoide is the processor: we process it only to deliver the testing you request, under your instructions, and not for our own purposes.

If you are an organization subject to GDPR or similar laws, a Data Processing Agreement (DPA) that sets out our processor obligations, sub-processors, and safeguards is available on request at info@shellvoide.com.`},{title:"Information We Collect",content:`We collect the following categories of information across our website, the KLUE platform, and our services:

• **Account and identity data**: name, work email address, company name, role, and password (stored only as a salted hash) when you register or are invited to a workspace.
• **Billing data**: plan, subscription status, and billing contact. Card numbers are handled directly by a third-party payment processor and are never stored on our servers.
• **Authentication data**: session cookies and scoped API keys (stored hashed) that you generate for CI/CD use.
• **Usage and telemetry data**: scans run, quota and concurrency consumption, feature usage, log and audit events, IP address, browser type, and pages visited.
• **Customer scan data**: the targets, credentials, source code, cloud and Microsoft 365 configurations, application and API endpoints, and the findings, logs, and reports produced when you use KLUE. We process this as your processor.
• **Communications data**: messages, support requests, and information you provide when you contact us or book an engagement.

We do not intentionally collect special category data (such as health or financial account data) through the website. You are responsible for the content you submit to KLUE for testing.`},{title:"How KLUE Processes Your Data",content:`Understanding how a scan runs helps explain how your data is handled:

• **You configure a scan** in the dashboard and our API checks your plan quota and concurrency limits.
• **A dedicated sandbox is created.** Each scan runs inside an isolated, ephemeral virtual machine provisioned by our sandbox provider. Source code is cloned using short-lived tokens that are scrubbed after use.
• **Security engines run inside the sandbox.** Depending on the product, KLUE performs cloud and Microsoft 365 audits, source code review, live application and API testing, autonomous testing, or threat intelligence collection.
• **An AI engine reasons over the work.** KLUE uses large language models to plan, select tools, and interpret results. Relevant context is sent to a model provider for processing (see "AI and Model Providers").
• **Findings are streamed to storage.** Results, logs, and reports are written to our database and object storage, isolated to your tenant by row level security.
• **The sandbox is destroyed.** When the scan finishes, the ephemeral environment and its working copy of your data are torn down.

Reports and findings remain in your workspace until you delete them or your retention period ends.`},{title:"Legal Bases for Processing",content:`Where GDPR or UK GDPR applies, we rely on the following legal bases to process your personal data:

• **Performance of a contract**: to create and operate your account, run the scans you request, deliver reports, and provide support.
• **Legitimate interests**: to secure our platform, prevent abuse, meter usage, improve our services, and communicate about your account. We balance these interests against your rights.
• **Consent**: for non-essential analytics cookies and any optional marketing communications. You can withdraw consent at any time.
• **Legal obligation**: to meet tax, accounting, and other legal requirements.

Where we act as your processor for scan content, your own legal basis as controller governs that processing.`},{title:"How We Use Your Information",content:`We use the information we collect to:

• Provide, operate, and maintain the KLUE platform and our services.
• Authenticate users, enforce roles and tenant isolation, and secure accounts.
• Process payments, manage subscriptions, and meter usage against plan limits.
• Generate, store, and share scan findings and reports within your workspace.
• Respond to inquiries, provide support, and send service-related communications.
• Detect, prevent, and investigate fraud, abuse, and security incidents.
• Improve our products, including through aggregated and anonymized analysis.
• Comply with legal obligations and enforce our agreements.

We do not sell or rent your personal data.`},{title:"Sub-Processors and Third-Party Services",content:`We rely on a small number of vetted service providers (sub-processors) to run the platform. Each is bound by contract to protect your data and to process it only on our instructions. We use sub-processors in the following roles:

• **Cloud hosting and database**: authentication, hosted database, and object storage, with per-tenant row level security.
• **Payment processing**: checkout and subscription billing. Card details are entered directly with the payment processor and are never stored on our servers.
• **Transactional email**: delivery of verification, password reset, and account emails.
• **Sandbox and compute**: provisioning of the ephemeral micro-VMs in which scans run.
• **Source control**: cloning code from your connected repositories using short-lived tokens.
• **AI model providers**: large language model processing for KLUE's reasoning engine. See "AI and Model Providers".
• **Application hosting**: serving and running the website and dashboard.
• **Website analytics**: anonymized usage analytics, loaded only with your consent.

We maintain a current list of the specific sub-processors we use, including their names, roles, and locations, and will provide it on request and as part of our Data Processing Agreement. We are not responsible for the privacy practices of external sites linked from our own.`},{title:"AI and Model Providers",content:`KLUE uses large language models to plan and carry out testing. To do this, relevant context from your scan, which can include snippets of source code, configuration, or findings, is sent to a model provider to be processed and returned.

• We send the minimum context needed to complete a task and apply credential redaction before data leaves the sandbox.
• We use model providers under agreements that restrict the use of submitted data to serving our requests. Where a provider offers controls against using inputs for model training, we enable them.
• KLUE is model agnostic. For sensitive workloads, locally hosted or self-managed model deployments can be arranged so that data does not leave a controlled environment. Contact us to discuss this option.

If you do not want specific data processed by a third-party model, do not include it in the scope of a scan.`},{title:"International Data Transfers",content:`Shellvoide is based in the United States, and some of our sub-processors operate in the United States and other countries. If you access our services from the European Economic Area, the United Kingdom, or another region with transfer restrictions, your personal data may be transferred to and processed in countries whose laws differ from your own.

Where we transfer personal data out of the EEA or the UK, we rely on appropriate safeguards, such as the European Commission's Standard Contractual Clauses and the UK International Data Transfer Addendum, or on an applicable adequacy decision. A copy of the relevant safeguards is available on request.`},{title:"Data Retention",content:`We keep personal data only for as long as we need it for the purposes in this policy or as required by law.

• **Account and billing data**: kept for the life of your account and, after closure, for up to 5 years to meet tax and legal requirements.
• **Scan findings, reports, and logs**: kept in your workspace until you delete them or your plan's retention period ends. You can delete findings and reports at any time.
• **Sandbox environments**: ephemeral and destroyed when a scan completes, along with the working copy of your code and configuration.
• **Website contact submissions**: kept for up to 12 months unless a business relationship is established.
• **Backups**: residual copies may persist in encrypted backups for a limited period before being overwritten.

On termination you may request export or deletion of your data, subject to legal retention obligations.`},{title:"Data Security",content:`Security is the core of what we do, and we apply it to our own platform. Our measures include:

• **Tenant isolation** enforced by row level security, so one customer can never access another's data.
• **Sandboxed execution**: every scan runs in an isolated, ephemeral environment that is destroyed afterwards.
• **Credential redaction** applied before data leaves the sandbox or is sent to a model provider.
• **Encryption** of reports and data in transit and at rest.
• **Hashed secrets**: passwords and API keys are stored only as hashes, never in plain text.
• **Short-lived clone tokens** that are scrubbed after use, and environment allow-listing for outbound connections.

No method of transmission or storage is completely secure, and we cannot guarantee absolute security. If we become aware of a personal data breach that affects you, we will notify you and the relevant authorities as required by law and without undue delay.`},{title:"Your Privacy Rights",content:`Depending on where you live, you may have some or all of the following rights over your personal data:

• **Access**: obtain a copy of the data we hold about you.
• **Rectification**: ask us to correct inaccurate or incomplete data.
• **Erasure**: ask us to delete your data (the "right to be forgotten").
• **Restriction and objection**: limit or object to how we process your data, including for direct marketing.
• **Portability**: receive your data in a portable, machine-readable format.
• **Withdraw consent**: where processing is based on consent, withdraw it at any time.

If you are in the EEA or UK, you also have the right to lodge a complaint with your local data protection authority. If you are a California resident, you have the right to know what personal information we collect, to request deletion, and to not be discriminated against for exercising your rights. We do not sell personal information as defined by California law.

To exercise any of these rights, contact us at info@shellvoide.com. We will respond within the timeframe required by applicable law. Where Shellvoide acts as a processor on behalf of your organization, we will direct your request to the relevant controller or assist them in responding.`},{title:"Cookies and Tracking",content:`We use cookies and similar technologies on our website. Here is what we use and why:

**Essential Cookies** (Always Active)
These are required for the website to function and cannot be disabled. They include session management, theme preferences, and security tokens. No personal data is collected via essential cookies.

**Analytics Cookies** (Consent Required)
With your consent, we may collect anonymized data about how visitors use our site, such as pages visited, time on site, and general location at the country level. This helps us improve the experience. We do not use advertising or cross-site tracking cookies.

**Cookie Consent**
When you first visit our website, you are prompted to accept or decline non-essential cookies. Your preference is stored in your browser's local storage under the key "shellvoide_cookie_consent" and respected on every subsequent visit.

**Managing Your Preferences**
You can update your cookie preferences at any time by clearing your browser's local storage or using your browser settings. Disabling essential cookies may impact website functionality.

We do not sell, share, or use cookie data for advertising purposes.`},{title:"Children's Privacy",content:"Our website and services are intended for businesses and professionals and are not directed to children. We do not knowingly collect personal data from anyone under the age of 16. If you believe a child has provided us with personal data, please contact us and we will delete it."},{title:"Changes to This Policy",content:"We may update this Privacy Policy from time to time. Material changes will be posted on this page with a new revision date and, where required, communicated to you directly. Continued use of our website or services after an update means you accept the revised policy."},{title:"Contact Us",content:`If you have questions about this policy, our data practices, or wish to exercise your rights, contact our data protection contact at:

**Shellvoide**
Albuquerque, New Mexico, United States
Email: info@shellvoide.com
Website: https://shellvoide.com

If you are in the EEA or UK and have concerns we have not resolved, you may also contact your local supervisory authority.`}],f="Shellvoide builds and operates KLUE, an AI penetration testing platform, alongside our hands-on security services. This policy explains what personal data we collect, how KLUE processes the data you submit for testing, who we share it with, and the rights you have over it. It applies to our website, the KLUE platform, and our professional services.",i=t=>t.split("**").map((o,a)=>a%2===1?e.jsx("strong",{className:"text-text font-semibold",children:o},a):o);function b({content:t}){const o=t.split(/\n\n+/);return e.jsx("div",{className:"text-text-secondary space-y-4 text-base leading-relaxed",children:o.map((a,n)=>{const r=a.split(`
`);return r.every(s=>s.trim().startsWith("•"))?e.jsx("ul",{className:"space-y-2.5",children:r.map((s,c)=>e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"bg-accent mt-[9px] block size-1.5 shrink-0 rounded-full"}),e.jsx("span",{children:i(s.replace(/^•\s*/,""))})]},c))},n):e.jsx("p",{children:i(a)},n)})})}function P(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{}),e.jsx("main",{className:"shell",children:e.jsxs("article",{className:"mx-auto max-w-[var(--container-prose)]",style:{paddingBlock:"var(--space-section)"},children:[e.jsx(u,{children:e.jsxs("header",{children:[e.jsx("p",{className:"text-label text-accent font-mono uppercase",children:"Legal"}),e.jsx("h1",{className:"text-feature text-text font-sans mt-4",children:"Privacy Policy"}),e.jsxs("p",{className:"text-text-tertiary mt-4 text-sm",children:["Last updated: ",m]}),e.jsx("p",{className:"text-text-secondary text-lead mt-8 leading-relaxed",children:f})]})}),e.jsx("div",{className:"mt-14 space-y-12",children:g.map((t,o)=>e.jsxs("section",{className:"border-line-subtle border-t pt-12 first:border-0 first:pt-0",children:[e.jsxs("div",{className:"mb-5 flex items-baseline gap-3",children:[e.jsx("span",{className:"text-label text-accent font-mono",children:String(o+1).padStart(2,"0")}),e.jsx("h2",{className:"text-h3 text-text font-sans",children:t.title})]}),e.jsx(b,{content:t.content})]},t.title))}),e.jsxs("div",{className:"border-line-subtle mt-16 border-t pt-10",children:[e.jsx("p",{className:"text-label text-text-muted font-mono uppercase",children:"Related"}),e.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:y.map(t=>e.jsxs(d,{to:t.to,className:"group border-line bg-surface-0 hover:bg-surface-1 flex items-center justify-between rounded-lg border p-4 transition-colors duration-150 ease-[var(--ease-out)]",children:[e.jsx("span",{className:"text-text text-sm font-medium",children:t.label}),e.jsx(p,{className:"text-accent size-4 transition-transform duration-150 ease-[var(--ease-out)] group-hover:translate-x-0.5"})]},t.to))})]})]})}),e.jsx("div",{className:"shell",children:e.jsx(h,{})})]})}export{P as default};
