const QUESTION_BANK = [
  // Level 1: parallel lists and verb forms
  {
    id: "L1Q01",
    level: 1,
    prompt: "Choose the best revision for a project kickoff email sentence.",
    context: "Original: The coordinator asked the team to draft the agenda, reviewing vendor quotes, and to confirm room setup.",
    choices: [
      "The coordinator asked the team to draft the agenda, review vendor quotes, and confirm room setup.",
      "The coordinator asked the team to draft the agenda, reviewing vendor quotes, and confirmed room setup.",
      "The coordinator asked the team to draft the agenda, review vendor quotes, and confirming room setup.",
      "The coordinator asked the team to draft the agenda, to review vendor quotes, and confirmed room setup."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Keep all actions in the same base verb form after 'to'.", "Watch the final verb form in the series.", "Check whether each item is grammatically parallel."],
    wrongWhyByChoice: ["", "'confirmed' shifts tense, so the list is not parallel.", "'confirming' is a participle while the other items are infinitive phrases.", "The last item changes to past tense ('confirmed'), breaking the pattern."],
    correctWhy: "All three tasks follow the infinitive pattern implied by 'to': draft, review, and confirm. This makes the sentence easy to scan in a business email.",
    ruleToRemember: "When listing actions after one marker (like 'to'), keep each action in the same form.",
    conceptTag: "parallel infinitive list"
  },
  {
    id: "L1Q02", level: 1,
    prompt: "Pick the most parallel bullet in a resume summary.",
    context: "The bullet should list three responsibilities in the same grammatical form.",
    choices: [
      "Managing onboarding, training new hires, and to update policy guides",
      "Manage onboarding, train new hires, and update policy guides",
      "To manage onboarding, training new hires, and updating policy guides",
      "Managed onboarding, trained new hires, and to update policy guides"
    ],
    correctIndex: 1,
    hintByChoice: ["Check the ending of the third item.", "", "Compare the first item with the second and third.", "Watch the verb form in item three."],
    wrongWhyByChoice: ["The third item switches to an infinitive while the others are gerunds.", "", "The first item is infinitive but the next two are gerunds.", "The first two are past tense; the third is infinitive."],
    correctWhy: "All three verbs are base-form commands (manage, train, update), which is the expected style for concise resume bullets.",
    ruleToRemember: "In resume bullets, choose one verb pattern and apply it to every listed action.",
    conceptTag: "parallel base verbs"
  },
  {
    id: "L1Q03", level: 1,
    prompt: "Choose the strongest revision for a weekly status update.",
    context: "Original: We are tracking open risks, to update the timeline, and coordinating with Legal.",
    choices: [
      "We are tracking open risks, to update the timeline, and coordinating with Legal.",
      "We are tracking open risks, updating the timeline, and coordinating with Legal.",
      "We are tracking open risks, update the timeline, and coordinated with Legal.",
      "We are tracking open risks, updating the timeline, and coordinate with Legal."
    ],
    correctIndex: 1,
    hintByChoice: ["Use the same '-ing' pattern across all items.", "", "Check tense consistency.", "One verb form does not match the progressive list."],
    wrongWhyByChoice: ["The second item is infinitive while the first and third are progressive gerunds.", "", "The second item is base form and the third is past tense.", "'coordinate' is base form while the other items are -ing forms."],
    correctWhy: "Each item is a present participle phrase (tracking, updating, coordinating), so the sentence presents ongoing work clearly.",
    ruleToRemember: "Match verb forms when describing parallel ongoing actions.",
    conceptTag: "parallel gerund phrases"
  },
  {
    id: "L1Q04", level: 1,
    prompt: "Select the best revision for meeting agenda wording.",
    context: "Original item: To review Q3 revenue, discussing hiring plans, and to finalize action owners.",
    choices: [
      "To review Q3 revenue, discuss hiring plans, and finalize action owners",
      "Review Q3 revenue, discussing hiring plans, and finalizing action owners",
      "To review Q3 revenue, to discuss hiring plans, and to finalize action owners",
      "Reviewed Q3 revenue, discussed hiring plans, and finalize action owners"
    ],
    correctIndex: 2,
    hintByChoice: ["After starting with 'To', keep the same marker for clarity.", "One item is in a different form.", "", "Check tense and form alignment."],
    wrongWhyByChoice: ["This version drops 'to' from later items; acceptable in some cases but less consistent than full parallel infinitives here.", "The first item is base verb while the second and third are -ing forms.", "", "Two items are past tense and the final item is base form."],
    correctWhy: "All three agenda actions use full infinitive phrases ('to review,' 'to discuss,' 'to finalize'), creating maximum structural consistency.",
    ruleToRemember: "In formal agendas, repeating the same phrase marker can improve readability.",
    conceptTag: "repeated infinitives"
  },
  {
    id: "L1Q05", level: 1,
    prompt: "Choose the best revision for an internal policy line.",
    context: "Original: Employees should submitting receipts within five days, keeping originals, and report lost documents.",
    choices: [
      "Employees should submitting receipts within five days, keeping originals, and report lost documents.",
      "Employees should submit receipts within five days, keep originals, and report lost documents.",
      "Employees should submit receipts within five days, keeping originals, and to report lost documents.",
      "Employees should submits receipts within five days, keep originals, and report lost documents."
    ],
    correctIndex: 1,
    hintByChoice: ["After modal 'should,' use base verbs.", "", "Check all items after 'should.'", "One verb is incorrectly inflected."],
    wrongWhyByChoice: ["'should submitting' is ungrammatical; modal verbs need base form.", "", "It mixes base, gerund, and infinitive forms.", "'submits' is wrong after 'should'."],
    correctWhy: "After 'should,' each action is in base form (submit, keep, report), making the policy direct and grammatically correct.",
    ruleToRemember: "Modal verbs (should, can, must) are followed by base verbs in parallel lists.",
    conceptTag: "modal + parallel verbs"
  },
  {
    id: "L1Q06", level: 1,
    prompt: "Pick the best parallel sentence from a performance review.",
    context: "Manager note should describe strengths in one pattern.",
    choices: [
      "She is reliable, communicates clearly, and meets deadlines.",
      "She is reliable, clear in communication, and meeting deadlines.",
      "She is reliable, communicating clearly, and meets deadlines.",
      "She is reliability-focused, communicates clearly, and deadline management."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Two items should be action verbs if one item is an action verb.", "Check whether all three coordinated items use the same finite verb pattern.", "Look at the grammatical type of the final item."],
    wrongWhyByChoice: ["", "This mixes an adjective phrase with a gerund phrase, so the list is not structurally consistent.", "'communicating' is a gerund phrase, but the other two coordinated items are finite clauses.", "The final item is a noun phrase, not a parallel finite-verb clause."],
    correctWhy: "Each coordinated element is a finite clause with the same subject 'She': is reliable, communicates clearly, and meets deadlines. This creates a clean, parallel performance statement.",
    ruleToRemember: "In coordinated performance traits, keep each item in the same clause pattern.",
    conceptTag: "matching grammatical roles"
  },
  {
    id: "L1Q07", level: 1,
    prompt: "Select the clearest revision of a client update.",
    context: "Original: Our goals are reducing response time, to improve handoffs, and that customer satisfaction increases.",
    choices: [
      "Our goals are reducing response time, improving handoffs, and increasing customer satisfaction.",
      "Our goals are to reduce response time, improving handoffs, and to increase customer satisfaction.",
      "Our goals are reducing response time, to improve handoffs, and that customer satisfaction increases.",
      "Our goals are reduce response time, improve handoffs, and increase customer satisfaction."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Use one pattern for all three goals.", "Look for mixed phrase types.", "After 'are,' the list should be parallel in noun/gerund form."],
    wrongWhyByChoice: ["", "This mixes infinitive and gerund forms.", "It combines gerund, infinitive, and full clause forms.", "'are reduce' is ungrammatical."],
    correctWhy: "All three goals use gerund phrases (reducing, improving, increasing), which creates a smooth, parallel list.",
    ruleToRemember: "If one goal is a gerund phrase, keep the others as gerund phrases too.",
    conceptTag: "parallel goal statements"
  },
  {
    id: "L1Q08", level: 1,
    prompt: "Choose the best sentence for a project charter.",
    context: "Original: The plan focuses on launching the portal quickly, secure user data, and measuring adoption monthly.",
    choices: [
      "The plan focuses on launching the portal quickly, securing user data, and measuring adoption monthly.",
      "The plan focuses on launching the portal quickly, secure user data, and measure adoption monthly.",
      "The plan focuses on launch the portal quickly, securing user data, and measuring adoption monthly.",
      "The plan focuses on launching the portal quickly, securing user data, and to measure adoption monthly."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Check the form after 'focuses on.'", "The first item form matters.", "Third item should match first two."],
    wrongWhyByChoice: ["", "After 'focuses on,' use gerunds, not base verbs.", "'launch' should be 'launching' after 'on.'", "The third item switches to infinitive."],
    correctWhy: "After 'focuses on,' each list item is a gerund phrase: launching, securing, measuring.",
    ruleToRemember: "Prepositions (like 'on') are commonly followed by gerunds in parallel lists.",
    conceptTag: "preposition + gerund parallelism"
  },
  {
    id: "L1Q09", level: 1,
    prompt: "Pick the most polished revision for a calendar invite.",
    context: "Original: Agenda: finalize vendor terms, we will assign owners, and confirming rollout dates.",
    choices: [
      "Agenda: finalizing vendor terms, assigning owners, and confirming rollout dates.",
      "Agenda: finalize vendor terms, assigning owners, and confirm rollout dates.",
      "Agenda: finalizing vendor terms, we will assign owners, and confirming rollout dates.",
      "Agenda: finalize vendor terms, assigned owners, and confirming rollout dates."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Try one shared grammatical pattern for all agenda items.", "Avoid full clauses inside a simple list.", "Watch the second and third verb forms."],
    wrongWhyByChoice: ["", "Mixes base verbs with gerund.", "'we will assign owners' is a full clause that breaks list symmetry.", "Mixes base, past, and gerund forms."],
    correctWhy: "All agenda items are parallel gerund phrases, which is concise and professional for meeting invites.",
    ruleToRemember: "Agenda lists read best when every item has the same structure.",
    conceptTag: "agenda parallel list"
  },
  {
    id: "L1Q10", level: 1,
    prompt: "Choose the strongest policy sentence.",
    context: "Original: Before travel, employees must check visa requirements, reviewing insurance rules, and submit approvals.",
    choices: [
      "Before travel, employees must check visa requirements, review insurance rules, and submit approvals.",
      "Before travel, employees must checking visa requirements, reviewing insurance rules, and submitting approvals.",
      "Before travel, employees must check visa requirements, reviewing insurance rules, and submit approvals.",
      "Before travel, employees must check visa requirements, review insurance rules, and submitting approvals."
    ],
    correctIndex: 0,
    hintByChoice: ["", "After 'must,' use base forms.", "One middle item is mismatched.", "Last item should match first two."],
    wrongWhyByChoice: ["", "Modal 'must' cannot be followed by gerunds.", "The second item is gerund while others are base verbs.", "The third item is gerund while first two are base verbs."],
    correctWhy: "The modal 'must' governs three base verbs—check, review, submit—so the instruction is parallel and forceful.",
    ruleToRemember: "After a modal, keep every coordinated verb in base form.",
    conceptTag: "modal instruction parallelism"
  },
  {
    id: "L1Q11", level: 1,
    prompt: "Select the best revision for an operations memo.",
    context: "Original: The supervisor requested logging all incidents, to notify IT, and documenting resolutions.",
    choices: [
      "The supervisor requested logging all incidents, notifying IT, and documenting resolutions.",
      "The supervisor requested to log all incidents, notifying IT, and documenting resolutions.",
      "The supervisor requested logging all incidents, notify IT, and documenting resolutions.",
      "The supervisor requested logging all incidents, notifying IT, and document resolutions."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Keep one pattern after 'requested.'", "Check middle item form.", "Check final item form."],
    wrongWhyByChoice: ["", "It starts infinitive then shifts to gerunds.", "'notify' (base) breaks the gerund sequence.", "'document' (base) breaks the gerund sequence."],
    correctWhy: "All three requested actions are gerunds (logging, notifying, documenting), which keeps the memo sentence balanced.",
    ruleToRemember: "In coordinated action lists, match endings and phrase type.",
    conceptTag: "gerund coordination"
  },
  {
    id: "L1Q12", level: 1,
    prompt: "Pick the clearest sentence for a team email.",
    context: "Original: This workshop helps interns to analyze data, presenting findings, and to ask better questions.",
    choices: [
      "This workshop helps interns analyze data, present findings, and ask better questions.",
      "This workshop helps interns to analyze data, presenting findings, and asking better questions.",
      "This workshop helps interns analyzing data, presenting findings, and asking better questions.",
      "This workshop helps interns to analyze data, present findings, and asking better questions."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Keep all items in one shared form after 'helps interns'.", "After 'helps,' avoid this pattern.", "Check the final item."],
    wrongWhyByChoice: ["", "It mixes infinitive and gerund forms.", "'helps interns analyzing' is awkward and nonparallel here.", "The third item is gerund while first two are infinitive/base."],
    correctWhy: "Using bare infinitives (analyze, present, ask) after 'helps interns' is concise and fully parallel.",
    ruleToRemember: "After verbs like 'help,' keep the coordinated actions in matching verb form.",
    conceptTag: "help + parallel verbs"
  },
  {
    id: "L1Q13", level: 1,
    prompt: "Choose the best revision of a manager comment.",
    context: "Original: He improved customer retention by responding quickly, by clarifying policies, and resolved escalations early.",
    choices: [
      "He improved customer retention by responding quickly, by clarifying policies, and resolving escalations early.",
      "He improved customer retention by responding quickly, clarifying policies, and resolving escalations early.",
      "He improved customer retention by respond quickly, by clarify policies, and by resolve escalations early.",
      "He improved customer retention by responding quickly, by clarifying policies, and he resolved escalations early."
    ],
    correctIndex: 1,
    hintByChoice: ["Repetition of 'by' is optional, but keep structure parallel and concise.", "", "Check verb forms after 'by'.", "Avoid mixing list phrases with a full clause."],
    wrongWhyByChoice: ["Grammatically acceptable, but less concise due to repeated 'by' in every item.", "", "Base forms after 'by' are incorrect; use gerunds.", "The third item becomes an independent clause instead of matching phrase form."],
    correctWhy: "The sentence uses three parallel gerund phrases linked smoothly after one 'by,' improving clarity and flow.",
    ruleToRemember: "Parallelism should be both grammatical and concise.",
    conceptTag: "by + gerund list"
  },
  {
    id: "L1Q14", level: 1,
    prompt: "Pick the best wording for a recruiting update.",
    context: "Original: Our priorities are screening resumes quickly, to schedule interviews, and reducing offer delays.",
    choices: [
      "Our priorities are screening resumes quickly, scheduling interviews, and reducing offer delays.",
      "Our priorities are to screen resumes quickly, scheduling interviews, and reducing offer delays.",
      "Our priorities are screening resumes quickly, to schedule interviews, and reducing offer delays.",
      "Our priorities are screen resumes quickly, schedule interviews, and reduce offer delays."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Stay consistent across all three priorities.", "Identify the odd form in the middle.", "Check verb agreement after 'are'."],
    wrongWhyByChoice: ["", "It mixes infinitive and gerund forms.", "The second item shifts to infinitive while others are gerunds.", "'are screen' is ungrammatical in this frame."],
    correctWhy: "Each priority is a gerund phrase (screening, scheduling, reducing), so the list sounds intentional and balanced.",
    ruleToRemember: "Choose one structure for abstract priorities and keep it throughout the list.",
    conceptTag: "parallel priorities"
  },
  {
    id: "L1Q15", level: 1,
    prompt: "Select the most parallel sentence from a handoff note.",
    context: "Original: Please archive closed tickets, documenting unresolved issues, and notify the support lead.",
    choices: [
      "Please archive closed tickets, document unresolved issues, and notify the support lead.",
      "Please archive closed tickets, documenting unresolved issues, and notifying the support lead.",
      "Please to archive closed tickets, document unresolved issues, and notify the support lead.",
      "Please archived closed tickets, document unresolved issues, and notify the support lead."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Imperatives should stay in base form.", "Check verb form after 'please'.", "First item tense conflicts with the rest."],
    wrongWhyByChoice: ["", "Gerunds break the imperative sequence.", "'Please to archive' is ungrammatical.", "'archived' is past tense while others are commands."],
    correctWhy: "The three imperatives—archive, document, notify—match in form and create a clear action list.",
    ruleToRemember: "Command lists should use parallel base-form verbs.",
    conceptTag: "parallel imperatives"
  },

  // Level 2: correlative conjunctions and comparisons
  {
    id: "L2Q01", level: 2,
    prompt: "Choose the best sentence using either/or in a policy update.",
    context: "Original: Employees may either submit receipts digitally or by dropping printed copies at Finance.",
    choices: [
      "Employees may either submit receipts digitally or drop printed copies at Finance.",
      "Employees may either submit receipts digitally or by dropping printed copies at Finance.",
      "Employees may submit either receipts digitally or dropped printed copies at Finance.",
      "Employees either may submit receipts digitally or dropped printed copies at Finance."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Match both sides of either/or.", "Check the second side verb form.", "The second option should mirror 'submit'."],
    wrongWhyByChoice: ["", "The second side is a prepositional phrase, not a matching verb phrase.", "'dropped' does not parallel 'submit'.", "'dropped' breaks the either/or verb parallelism."],
    correctWhy: "Both options are base verb phrases (submit ... / drop ...), so the either/or structure is balanced.",
    ruleToRemember: "With either/or, place parallel grammatical units on both sides.",
    conceptTag: "either-or verb parallelism"
  },
  {
    id: "L2Q02", level: 2,
    prompt: "Select the best revision with not only/but also.",
    context: "Original: The new onboarding guide not only reduces confusion but also faster completion times.",
    choices: [
      "The new onboarding guide not only reduces confusion but also faster completion times.",
      "The new onboarding guide not only reduces confusion but also improves completion speed.",
      "The new onboarding guide not only reducing confusion but also improves completion speed.",
      "The new onboarding guide reduces not only confusion but also improving completion speed."
    ],
    correctIndex: 1,
    hintByChoice: ["Both sides after the correlative pair should match.", "", "Check the first verb form.", "The second half should not shift forms."],
    wrongWhyByChoice: ["Second half is a noun phrase, not a matching verb phrase.", "", "It mixes gerund with finite verb.", "It pairs noun with gerund phrase."],
    correctWhy: "The sentence pairs two finite verb phrases: reduces confusion / improves completion speed.",
    ruleToRemember: "Correlative conjunctions work best when each side has the same structure.",
    conceptTag: "not only but also verbs"
  },
  {
    id: "L2Q03", level: 2,
    prompt: "Pick the best comparison sentence in a quarterly review.",
    context: "Original: This quarter's churn rate is lower than the previous quarter was.",
    choices: [
      "This quarter's churn rate is lower than the previous quarter was.",
      "This quarter's churn rate is lower than in the previous quarter.",
      "This quarter's churn rate is lower than the previous quarter.",
      "This quarter's churn rate is lower as the previous quarter."
    ],
    correctIndex: 1,
    hintByChoice: ["Trim awkward repetition in comparison.", "", "This creates a faulty comparison.", "Use 'than,' not 'as,' for unequal comparisons."],
    wrongWhyByChoice: ["Grammatically possible but wordy and less precise.", "", "It compares a rate to a quarter (unlike categories).", "'lower as' is incorrect comparative structure."],
    correctWhy: "It compares the rate now with the rate in the previous quarter, keeping categories aligned and concise.",
    ruleToRemember: "Comparisons must compare equivalent things.",
    conceptTag: "comparison clarity"
  },
  {
    id: "L2Q04", level: 2,
    prompt: "Choose the best either/or sentence for a meeting note.",
    context: "Original: The chair will either approve the budget today or a vote will be scheduled for Friday.",
    choices: [
      "The chair will either approve the budget today or schedule a vote for Friday.",
      "The chair will either approve the budget today or a vote will be scheduled for Friday.",
      "Either the chair will approve the budget today or scheduling a vote for Friday.",
      "The chair either will approve the budget today or scheduled a vote for Friday."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Try matching both sides as verb phrases after 'will'.", "The second side should be finite and parallel.", "Check tense on the second side."],
    wrongWhyByChoice: ["", "Second side is a full passive clause, not parallel to first verb phrase.", "Second side is a gerund phrase and incomplete.", "Second side changes to past tense."],
    correctWhy: "Both alternatives are controlled by 'will' and use base verbs: approve / schedule.",
    ruleToRemember: "Keep either/or options in the same syntactic frame.",
    conceptTag: "either-or with modal"
  },
  {
    id: "L2Q05", level: 2,
    prompt: "Select the best not only/but also line for a performance review.",
    context: "Original: She not only led the migration but also documentation was improved by her.",
    choices: [
      "She not only led the migration but also documentation was improved by her.",
      "She not only led the migration but also improved documentation.",
      "She not only leading the migration but also improved documentation.",
      "She led not only the migration but also improving documentation."
    ],
    correctIndex: 1,
    hintByChoice: ["Make both halves active and parallel.", "", "Check first half tense/form.", "Second half should match noun phrase or verb phrase pattern."],
    wrongWhyByChoice: ["Second half switches to passive clause, reducing parallelism.", "", "First half uses gerund while second is past tense finite verb.", "Mixes noun phrase and gerund phrase."],
    correctWhy: "Both halves are active past-tense verb phrases (led / improved), producing direct, parallel praise.",
    ruleToRemember: "Prefer parallel active structures for stronger business writing.",
    conceptTag: "not only but also active voice"
  },
  {
    id: "L2Q06", level: 2,
    prompt: "Choose the clearest comparison in a compensation memo.",
    context: "Original: The new reimbursement cap is more flexible than last year's policy.",
    choices: [
      "The new reimbursement cap is more flexible than last year's policy.",
      "The reimbursement process is more flexible than last year's cap.",
      "The new reimbursement cap is more flexible than last year.",
      "The new reimbursement cap is as more flexible as last year's cap."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Check whether you are comparing same category items.", "This is acceptable but less exact than comparing policy to policy text?", "Comparative marker is malformed."],
    wrongWhyByChoice: ["", "It compares process to cap (different categories).", "Possible in conversation, but less specific than a like-for-like noun comparison in formal writing.", "Use either 'more ... than' or 'as ... as,' not both."],
    correctWhy: "It compares one cap/policy feature to another in a direct, category-consistent way.",
    ruleToRemember: "In comparisons, match noun types and comparative structure.",
    conceptTag: "more-than comparison"
  },
  {
    id: "L2Q07", level: 2,
    prompt: "Pick the best as...as sentence for a customer service script.",
    context: "Original: Agents should be as clear and as concise when explaining refunds.",
    choices: [
      "Agents should be as clear as concise when explaining refunds.",
      "Agents should be as clear and concise as possible when explaining refunds.",
      "Agents should be as clearly and concise as possible when explaining refunds.",
      "Agents should be clear as concise as possible when explaining refunds."
    ],
    correctIndex: 1,
    hintByChoice: ["Use the full as...as frame correctly.", "", "Adverbs/adjectives need to match.", "Missing first 'as'."],
    wrongWhyByChoice: ["Missing the second 'as' before 'concise'.", "", "'clearly' (adverb) mismatches adjective 'concise'.", "Incomplete correlative comparison."],
    correctWhy: "It uses a complete, idiomatic structure: as clear and concise as possible.",
    ruleToRemember: "As...as comparisons require complete paired markers and parallel word class.",
    conceptTag: "as-as construction"
  },
  {
    id: "L2Q08", level: 2,
    prompt: "Choose the strongest sentence using neither/nor.",
    context: "Original: The update neither clarified deadlines nor ownership was defined.",
    choices: [
      "The update neither clarified deadlines nor ownership was defined.",
      "The update neither clarified deadlines nor defined ownership.",
      "The update neither clarifying deadlines nor defined ownership.",
      "The update clarified neither deadlines nor defining ownership."
    ],
    correctIndex: 1,
    hintByChoice: ["Both sides should be matching verb phrases.", "", "Check the first verb form.", "Second item should be noun phrase or verb phrase in match."],
    wrongWhyByChoice: ["Second half is a clause, not parallel to first verb phrase.", "", "Gerund + past verb is mismatched.", "Second side is gerund while first side is noun."],
    correctWhy: "It balances two past-tense verb phrases: clarified deadlines / defined ownership.",
    ruleToRemember: "Neither/nor needs parallel structures just like either/or.",
    conceptTag: "neither-nor parallelism"
  },
  {
    id: "L2Q09", level: 2,
    prompt: "Select the best comparative sentence in a sales report.",
    context: "Original: We closed more enterprise accounts this month than last month did.",
    choices: [
      "We closed more enterprise accounts this month than last month did.",
      "We closed more enterprise accounts this month than in last month.",
      "We closed more enterprise accounts this month than last month.",
      "We closed more enterprise accounts this month as last month."
    ],
    correctIndex: 2,
    hintByChoice: ["Remove unnecessary helper words where possible.", "Preposition choice is awkward.", "", "Comparative marker should be 'than'."],
    wrongWhyByChoice: ["Grammatically possible but unnecessarily wordy.", "'than in last month' is awkward; article and structure are off.", "", "'as' is incorrect for unequal comparison."],
    correctWhy: "It is concise and clear; readers infer the omitted verb phrase naturally in business reports.",
    ruleToRemember: "Use concise ellipsis in comparisons when meaning remains clear.",
    conceptTag: "concise comparison"
  },
  {
    id: "L2Q10", level: 2,
    prompt: "Choose the best sentence with both/and.",
    context: "Original: The proposal addresses both budget limits and how to improve team morale.",
    choices: [
      "The proposal addresses both budget limits and team morale improvements.",
      "The proposal addresses both budget limits and how to improve team morale.",
      "The proposal addresses both budgeting limits and improving team morale.",
      "The proposal addresses both budget limits and improve team morale."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Try matching phrase type on both sides.", "One item changes meaning slightly and sounds less natural.", "Verb form mismatch after 'and'."],
    wrongWhyByChoice: ["", "Noun phrase + clause are not fully parallel.", "Although parallel, 'budgeting limits' changes intended meaning from 'budget limits.'", "Second side is base verb phrase not matching noun phrase."],
    correctWhy: "It pairs two noun phrases (budget limits / team morale improvements), creating a clean both/and structure.",
    ruleToRemember: "With both/and, match the grammatical type on each side.",
    conceptTag: "both-and noun phrase parallelism"
  },
  {
    id: "L2Q11", level: 2,
    prompt: "Pick the best not only/but also sentence for an executive summary.",
    context: "Original: The redesign not only cut processing time but also customer complaints decreased.",
    choices: [
      "The redesign not only cut processing time but also customer complaints decreased.",
      "The redesign not only cut processing time but also reduced customer complaints.",
      "The redesign not only cutting processing time but also reduced customer complaints.",
      "The redesign cut not only processing time but also reducing customer complaints."
    ],
    correctIndex: 1,
    hintByChoice: ["Make both sides active verb phrases.", "", "First half form mismatch.", "Second half should match noun phrase pattern."],
    wrongWhyByChoice: ["Second half is a clause, not parallel with 'cut processing time.'", "", "Gerund + past tense mismatch.", "Second side becomes gerund phrase."],
    correctWhy: "Both halves are active past-tense verb phrases: cut ... / reduced ... for a parallel summary.",
    ruleToRemember: "Keep both halves of not only/but also structurally symmetrical.",
    conceptTag: "not-only parallel past verbs"
  },
  {
    id: "L2Q12", level: 2,
    prompt: "Choose the best sentence comparing two hiring plans.",
    context: "Original: Plan A is as efficient than Plan B in screening applicants.",
    choices: [
      "Plan A is as efficient than Plan B in screening applicants.",
      "Plan A is as efficient as Plan B in screening applicants.",
      "Plan A is more efficient as Plan B in screening applicants.",
      "Plan A is efficient as Plan B in screening applicants."
    ],
    correctIndex: 1,
    hintByChoice: ["As...as is the required pair.", "", "Use 'more ... than' or 'as ... as'.", "Missing the first marker."],
    wrongWhyByChoice: ["'as ... than' is incorrect pairing.", "", "'more ... as' is incorrect pairing.", "Incomplete as...as construction."],
    correctWhy: "It correctly uses the correlative structure 'as efficient as' for equal comparison.",
    ruleToRemember: "Pair comparative markers correctly: as...as or more...than.",
    conceptTag: "as-as vs more-than"
  },
  {
    id: "L2Q13", level: 2,
    prompt: "Select the clearest either/or sentence in a project update.",
    context: "Original: We can either launch in May or delaying until June for extra testing.",
    choices: [
      "We can either launch in May or delay until June for extra testing.",
      "We can either launch in May or delaying until June for extra testing.",
      "We can either launching in May or delay until June for extra testing.",
      "Either we can launch in May or delaying until June for extra testing."
    ],
    correctIndex: 0,
    hintByChoice: ["", "After modal 'can', match base verbs.", "First side should be base verb.", "Second side should match first."],
    wrongWhyByChoice: ["", "Second side gerund mismatches base verb.", "First side gerund mismatches base verb on second side.", "Second side gerund breaks parallelism."],
    correctWhy: "Both alternatives are base verbs governed by 'can': launch or delay.",
    ruleToRemember: "When a modal governs alternatives, keep each alternative in base form.",
    conceptTag: "modal either-or"
  },
  {
    id: "L2Q14", level: 2,
    prompt: "Pick the strongest comparison for a board memo.",
    context: "Original: The revised budget is more realistic than the first draft was unrealistic.",
    choices: [
      "The revised budget is more realistic than the first draft was unrealistic.",
      "The revised budget is more realistic than the first draft.",
      "The revised budget is more realistic as the first draft.",
      "The revised budget is as realistic than the first draft."
    ],
    correctIndex: 1,
    hintByChoice: ["Avoid redundant wording in the comparison tail.", "", "Use 'than' for this comparative.", "Correlative markers are mismatched."],
    wrongWhyByChoice: ["It is awkward and redundant ('was unrealistic').", "", "'more ... as' is incorrect.", "'as ... than' is incorrect."],
    correctWhy: "It gives a direct, clean comparison between two budgets without redundant predicates.",
    ruleToRemember: "Comparative sentences are strongest when they are concise and logically parallel.",
    conceptTag: "clean comparative revision"
  },
  {
    id: "L2Q15", level: 2,
    prompt: "Choose the best sentence for a training policy.",
    context: "Original: New managers must both complete compliance training and that they mentor one junior employee.",
    choices: [
      "New managers must both complete compliance training and mentor one junior employee.",
      "New managers must both complete compliance training and that they mentor one junior employee.",
      "New managers must complete both compliance training and mentoring one junior employee.",
      "New managers both must complete compliance training and mentoring one junior employee."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Second side should be parallel verb phrase.", "Second item should match noun/verb form properly.", "Gerund mismatch on second side."],
    wrongWhyByChoice: ["", "Second side is a clause, not a parallel base verb phrase.", "Mixes noun phrase with gerund phrase.", "Second side uses gerund where base verb is needed."],
    correctWhy: "Both required actions are base verb phrases under 'must': complete ... and mentor ... .",
    ruleToRemember: "With both/and under a modal, keep coordinated actions in matching base verb form.",
    conceptTag: "both-and with modal"
  },

  // Level 3: mixed structures and clarity-preserving revisions
  {
    id: "L3Q01", level: 3,
    prompt: "Choose the best revision of a long project update sentence.",
    context: "Original: To reduce delays, the team updated the checklist, meeting with stakeholders weekly, and that risks were documented in one tracker.",
    choices: [
      "To reduce delays, the team updated the checklist, met with stakeholders weekly, and documented risks in one tracker.",
      "To reduce delays, the team updated the checklist, meeting with stakeholders weekly, and documented risks in one tracker.",
      "To reduce delays, the team updated the checklist, met with stakeholders weekly, and that risks were documented in one tracker.",
      "To reduce delays, the team updated the checklist, and weekly meetings with stakeholders, and documented risks in one tracker."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Keep all coordinated actions in the same finite verb form.", "Avoid switching to a 'that' clause mid-list.", "Match complete verb phrases."],
    wrongWhyByChoice: ["", "'meeting' is a gerund phrase while other actions are finite past verbs.", "Final item is a clause, not parallel to earlier verb phrases.", "Middle item is a noun phrase, not a verb phrase."],
    correctWhy: "It keeps three past-tense action verbs (updated, met, documented), improving clarity without changing meaning.",
    ruleToRemember: "In long sentences, keep coordinated actions in one consistent verb frame.",
    conceptTag: "long-sentence verb parallelism"
  },
  {
    id: "L3Q02", level: 3,
    prompt: "Select the best rewrite of a policy sentence without changing meaning.",
    context: "Original: Employees are expected to submit expense forms on time, accuracy in itemization, and to retain receipts for audits.",
    choices: [
      "Employees are expected to submit expense forms on time, itemize expenses accurately, and retain receipts for audits.",
      "Employees are expected to submit expense forms on time, accurate itemization, and retaining receipts for audits.",
      "Employees are expected to submit expense forms on time, itemizing expenses accurately, and to retain receipts for audits.",
      "Employees are expected to submit expense forms on time, and accurate itemization, and to retain receipts for audits."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Second item should be an action, not a noun phrase.", "Keep all items in same infinitive/base pattern.", "Avoid inserting unmatched noun phrase."],
    wrongWhyByChoice: ["", "'accurate itemization' is a noun phrase amid verb phrases.", "It mixes gerund and infinitive forms.", "The second item is not parallel to the first and third actions."],
    correctWhy: "All three expectations are verb phrases linked to 'are expected to': submit, itemize, retain.",
    ruleToRemember: "For policy expectations, make each listed expectation an action phrase.",
    conceptTag: "policy action parallelism"
  },
  {
    id: "L3Q03", level: 3,
    prompt: "Pick the strongest revision for a board report sentence.",
    context: "Original: The CFO stated that the plan would not only reduce overhead but also that it would improve forecasting accuracy.",
    choices: [
      "The CFO stated that the plan would not only reduce overhead but also improve forecasting accuracy.",
      "The CFO stated that the plan would not only reduce overhead but also that it would improve forecasting accuracy.",
      "The CFO stated that the plan would not only reducing overhead but also improve forecasting accuracy.",
      "The CFO stated that the plan would reduce not only overhead but also improving forecasting accuracy."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Drop unnecessary repeated clause markers for smoother parallelism.", "Check form after 'would'.", "Second side should match noun phrase or verb phrase pattern."],
    wrongWhyByChoice: ["", "Redundant 'that it would' weakens parallel balance.", "'reducing' mismatches with modal 'would'.", "Second item is gerund, not parallel to noun phrase 'overhead'."],
    correctWhy: "It cleanly pairs two infinitive-like verb phrases under 'would': reduce / improve.",
    ruleToRemember: "Remove repeated clause scaffolding when it disrupts parallel structure.",
    conceptTag: "not-only clause tightening"
  },
  {
    id: "L3Q04", level: 3,
    prompt: "Choose the best revision of this performance-review sentence.",
    context: "Original: During the quarter, she improved handoff quality, escalations were resolved faster, and documented SOP gaps.",
    choices: [
      "During the quarter, she improved handoff quality, resolved escalations faster, and documented SOP gaps.",
      "During the quarter, she improved handoff quality, escalations were resolved faster, and documented SOP gaps.",
      "During the quarter, she improved handoff quality, resolving escalations faster, and documented SOP gaps.",
      "During the quarter, she improved handoff quality, resolved escalations faster, and documenting SOP gaps."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Avoid shifting to passive clause inside an active list.", "Keep all actions finite and parallel.", "Third item should match tense/form."],
    wrongWhyByChoice: ["", "Second item is passive clause while first and third are active actions.", "Middle item is gerund phrase, not parallel to finite verbs.", "Third item is gerund, not parallel to past-tense verbs."],
    correctWhy: "All three actions are parallel past-tense verbs (improved, resolved, documented), which gives a balanced review statement.",
    ruleToRemember: "In achievement summaries, keep action verbs parallel and active.",
    conceptTag: "review sentence revision"
  },
  {
    id: "L3Q05", level: 3,
    prompt: "Select the clearest rewrite for an email to stakeholders.",
    context: "Original: We need to either expand support hours, hiring more agents, or improve self-service options.",
    choices: [
      "We need to either expand support hours, hire more agents, or improve self-service options.",
      "We need to either expand support hours, hiring more agents, or improve self-service options.",
      "We need either to expand support hours, hiring more agents, or to improve self-service options.",
      "We need to expand either support hours, hiring more agents, or improve self-service options."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Keep all options in base verb form after 'to'.", "One option still uses gerund.", "Either placement should not break parallelism."],
    wrongWhyByChoice: ["", "'hiring' is gerund, not parallel to expand/improve.", "The middle option remains gerund and nonparallel.", "Middle option is nonparallel gerund phrase."],
    correctWhy: "All three alternatives are base verb phrases (expand, hire, improve), creating a clear decision set.",
    ruleToRemember: "In multi-option either/or constructions, ensure each option has matching verb form.",
    conceptTag: "either-or multi-item parallelism"
  },
  {
    id: "L3Q06", level: 3,
    prompt: "Choose the best revision for this comparison-heavy update.",
    context: "Original: The revised SOP is clearer than the old process and easier for new hires to follow than before.",
    choices: [
      "The revised SOP is clearer than the old SOP and easier for new hires to follow than the old SOP was.",
      "The revised SOP is clearer than the old process and easier for new hires to follow than before.",
      "The revised SOP is more clear than the old process and easier than before for new hires to follow.",
      "The revised SOP is clearer than before and easier than the old SOP for new hires to follow."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Make both comparisons explicit and equivalent.", "Word order and comparison targets are muddy.", "Comparison targets are mismatched."],
    wrongWhyByChoice: ["", "'than before' leaves comparison target vague for the second comparison.", "Comparative phrasing is awkward and less precise.", "It compares different things in each half, reducing clarity."],
    correctWhy: "It explicitly compares the revised SOP against the old SOP in both clauses, preserving meaning with clearer parallel comparison.",
    ruleToRemember: "When a sentence has two comparisons, keep both targets explicit and parallel.",
    conceptTag: "double comparison clarity"
  },
  {
    id: "L3Q07", level: 3,
    prompt: "Pick the best revision of this agenda sentence.",
    context: "Original: The meeting will cover budget variance, how staffing will change, and discussing timeline risks.",
    choices: [
      "The meeting will cover budget variance, staffing changes, and timeline risks.",
      "The meeting will cover budget variance, how staffing will change, and discussing timeline risks.",
      "The meeting will cover budget variance, changing staffing, and discuss timeline risks.",
      "The meeting will cover budget variance, staffing will change, and timeline risks discussed."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Keep all agenda items as similar noun phrases.", "Second and third items break pattern.", "Avoid clause and passive fragment mix."],
    wrongWhyByChoice: ["", "This mixes noun phrase, clause, and gerund phrase.", "It mixes noun phrase, gerund phrase, and verb phrase.", "It mixes noun phrase, clause, and passive fragment."],
    correctWhy: "All three items are concise noun phrases, making the agenda easier to scan.",
    ruleToRemember: "For agendas, parallel noun phrases often maximize readability.",
    conceptTag: "agenda noun parallelism"
  },
  {
    id: "L3Q08", level: 3,
    prompt: "Select the best rewrite for a policy clarification.",
    context: "Original: Team leads must not only approve overtime requests but also timely documentation of approvals.",
    choices: [
      "Team leads must not only approve overtime requests but also document approvals on time.",
      "Team leads must not only approve overtime requests but also timely documentation of approvals.",
      "Team leads must not only approving overtime requests but also document approvals on time.",
      "Team leads must approve not only overtime requests but also documenting approvals on time."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Second half should be a parallel verb phrase.", "Check form after modal 'must'.", "Second side should match noun/verb pattern."],
    wrongWhyByChoice: ["", "Second side is noun phrase, not parallel to verb phrase 'approve'.", "'approving' is wrong after modal 'must'.", "Second side becomes gerund phrase."],
    correctWhy: "Both required actions are base verb phrases under 'must': approve / document.",
    ruleToRemember: "After modals in correlative pairs, use parallel base verbs.",
    conceptTag: "modal correlative balance"
  },
  {
    id: "L3Q09", level: 3,
    prompt: "Choose the clearest sentence for a client-facing summary.",
    context: "Original: The pilot improved response speed, reduced ticket backlog, and customer trust increased.",
    choices: [
      "The pilot improved response speed, reduced ticket backlog, and increased customer trust.",
      "The pilot improved response speed, reduced ticket backlog, and customer trust increased.",
      "The pilot improved response speed, reducing ticket backlog, and increased customer trust.",
      "The pilot improved response speed, reduced ticket backlog, and increase customer trust."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Keep all three outcomes in same active verb frame.", "Avoid mixing finite verbs and gerund phrase.", "Check final verb tense/form."],
    wrongWhyByChoice: ["", "Third item is a clause, not parallel with first two verb phrases.", "Second item uses gerund, breaking past-tense parallelism.", "Final item is base form, not past tense."],
    correctWhy: "It keeps three coordinated past-tense verb phrases (improved, reduced, increased), preserving meaning and flow.",
    ruleToRemember: "If two list items are finite past verbs, make the third match.",
    conceptTag: "outcome list parallelism"
  },
  {
    id: "L3Q10", level: 3,
    prompt: "Pick the best revision for this long sentence in a project plan.",
    context: "Original: To meet the launch date, we must streamline approvals, clearer escalation paths, and coordinate with vendors earlier.",
    choices: [
      "To meet the launch date, we must streamline approvals, clarify escalation paths, and coordinate with vendors earlier.",
      "To meet the launch date, we must streamline approvals, clearer escalation paths, and coordinate with vendors earlier.",
      "To meet the launch date, we must streamlining approvals, clarify escalation paths, and coordinate with vendors earlier.",
      "To meet the launch date, we must streamline approvals, clarify escalation paths, and coordinating with vendors earlier."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Second item should be a verb phrase like first and third.", "After 'must', avoid gerunds.", "Third item should be base verb."],
    wrongWhyByChoice: ["", "'clearer escalation paths' is noun phrase, not parallel action.", "'streamlining' is wrong after modal 'must'.", "'coordinating' is wrong after modal 'must'."],
    correctWhy: "All three necessities are base verb phrases after 'must': streamline, clarify, coordinate.",
    ruleToRemember: "In strategy sentences with 'must,' keep every coordinated item as a base verb action.",
    conceptTag: "must + strategic actions"
  },
  {
    id: "L3Q11", level: 3,
    prompt: "Choose the best rewrite of a compliance message.",
    context: "Original: Auditors will check whether logs are complete, whether approvals are timely, and policy exceptions documented.",
    choices: [
      "Auditors will check whether logs are complete, whether approvals are timely, and whether policy exceptions are documented.",
      "Auditors will check whether logs are complete, whether approvals are timely, and policy exceptions documented.",
      "Auditors will check whether logs are complete, whether approvals are timely, and documenting policy exceptions.",
      "Auditors will check whether logs are complete, approvals are timely, and whether policy exceptions are documented."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Repeat the clause marker for full parallelism in formal compliance writing.", "Third item should match whether-clause pattern.", "Second item should keep repeated marker for symmetry."],
    wrongWhyByChoice: ["", "Third item lacks 'whether ... are', breaking strict clause parallelism.", "Third item becomes gerund phrase.", "Dropping the second 'whether' weakens full triad symmetry for this formal tone."],
    correctWhy: "Each checked condition is a full whether-clause, which is especially clear in audit language.",
    ruleToRemember: "In formal multi-clause checks, repeating clause markers can improve precision.",
    conceptTag: "clausal parallelism"
  },
  {
    id: "L3Q12", level: 3,
    prompt: "Pick the best revision for this executive email sentence.",
    context: "Original: The proposal is not only practical for current teams but also scalability for future growth.",
    choices: [
      "The proposal is not only practical for current teams but also scalable for future growth.",
      "The proposal is not only practical for current teams but also scalability for future growth.",
      "The proposal is not only practically for current teams but also scalable for future growth.",
      "The proposal is practical not only for current teams but also scalability for future growth."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Match adjective with adjective after not only/but also.", "Adverb/adjective mismatch in first half.", "Second half should be adjective phrase."],
    wrongWhyByChoice: ["", "Second half is noun phrase ('scalability'), not adjective phrase.", "'practically' should be adjective 'practical' here.", "Second side is noun phrase, not parallel to adjective phrase."],
    correctWhy: "It pairs two adjective phrases: practical ... / scalable ... , preserving meaning with clean symmetry.",
    ruleToRemember: "Correlative structures should pair equivalent word classes.",
    conceptTag: "adjective parallelism"
  },
  {
    id: "L3Q13", level: 3,
    prompt: "Select the clearest revision for a detailed status line.",
    context: "Original: We are prioritizing customer escalations, to shorten resolution times, and building a searchable knowledge base.",
    choices: [
      "We are prioritizing customer escalations, shortening resolution times, and building a searchable knowledge base.",
      "We are prioritizing customer escalations, to shorten resolution times, and building a searchable knowledge base.",
      "We are prioritizing customer escalations, shorten resolution times, and building a searchable knowledge base.",
      "We are prioritizing customer escalations, shortening resolution times, and to build a searchable knowledge base."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Keep all three as -ing phrases.", "Second item should match ongoing form.", "Third item should match ongoing form."],
    wrongWhyByChoice: ["", "The middle item shifts to infinitive.", "The middle item is base verb, not gerund phrase.", "Third item shifts to infinitive."],
    correctWhy: "All three ongoing initiatives use parallel -ing phrases (prioritizing, shortening, building).",
    ruleToRemember: "For ongoing work updates, consistent -ing structures improve rhythm and clarity.",
    conceptTag: "ongoing initiative parallelism"
  },
  {
    id: "L3Q14", level: 3,
    prompt: "Choose the best polished revision for a performance-review summary.",
    context: "Original: He was praised for not only solving client issues quickly but also he trained newer analysts effectively.",
    choices: [
      "He was praised for not only solving client issues quickly but also training newer analysts effectively.",
      "He was praised for not only solving client issues quickly but also he trained newer analysts effectively.",
      "He was praised for not only solve client issues quickly but also training newer analysts effectively.",
      "He was praised for solving not only client issues quickly but also he trained newer analysts effectively."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Keep both sides after 'for' as matching gerund phrases.", "After 'for', use gerund.", "Avoid mixing gerund phrase and full clause."],
    wrongWhyByChoice: ["", "Second side is full clause ('he trained'), not parallel gerund phrase.", "'solve' should be 'solving' after 'for'.", "Second side is clause, not parallel gerund phrase."],
    correctWhy: "Both praised behaviors are gerund phrases after 'for': solving ... / training ... .",
    ruleToRemember: "After prepositions like 'for,' parallel items should typically be gerunds.",
    conceptTag: "preposition + correlative gerunds"
  },
  {
    id: "L3Q15", level: 3,
    prompt: "Pick the strongest clarity revision for an implementation note.",
    context: "Original: The rollout requires aligning timelines across teams, clear ownership at each handoff, and to communicate risks early.",
    choices: [
      "The rollout requires aligning timelines across teams, clarifying ownership at each handoff, and communicating risks early.",
      "The rollout requires aligning timelines across teams, clear ownership at each handoff, and to communicate risks early.",
      "The rollout requires align timelines across teams, clear ownership at each handoff, and communicate risks early.",
      "The rollout requires aligning timelines across teams, clarify ownership at each handoff, and communicating risks early."
    ],
    correctIndex: 0,
    hintByChoice: ["", "Middle and final items should match the first gerund phrase.", "After 'requires,' gerund phrases work best here.", "Second item should be gerund to match first and third."],
    wrongWhyByChoice: ["", "It mixes gerund, noun phrase, and infinitive forms.", "Mixes base verb and noun phrase under 'requires'.", "Second item base verb breaks gerund sequence."],
    correctWhy: "All three required elements are parallel gerund phrases (aligning, clarifying, communicating), which improves readability.",
    ruleToRemember: "When 'requires' introduces a list of actions, keep those actions in a consistent form.",
    conceptTag: "requires + gerund parallelism"
  }
];
