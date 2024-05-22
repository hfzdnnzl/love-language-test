const questions = [
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "I receive a loving note/text/email for no special reason from my loved one.", type: "Words of Affirmation" },
      { text: "my partner and I hug.", type: "Physical Touch" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "I can spend alone time with my partner - Just the two of us.", type: "Quality Time" },
      { text: "my partner does something practical to help me out.", type: "Acts of Service" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner gives me a little gift as a token of our love for each other.", type: "Receiving Gifts" },
      { text: "I get to spend uninterrupted leisure time with my partner.", type: "Quality Time" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner unexpectedly does something for me like filling my car or doing the laundry.", type: "Acts of Service" },
      { text: "my partner and I touch.", type: "Physical Touch" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner puts their arm around me when we're in public", type: "Physical Touch" },
      { text: "my partner surprises me with a gift.", type: "Receiving Gifts" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "I'm around my partner, even if we're not really doing anything.", type: "Quality Time" },
      { text: "I hold hands with my partner.", type: "Physical Touch" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner gives me a gift.", type: "Receiving Gifts" },
      { text: "I hear \"I love you\" from my partner.", type: "Words of Affirmation" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "I sit close to my partner.", type: "Physical Touch" },
      { text: "I am complimented by my loved one for no apparent reason.", type: "Words of Affirmation" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "I get the chance to just \"hang out\" with my partner.", type: "Quality Time" },
      { text: "I unexpectedly get small gifts from my partner.", type: "Receiving Gifts" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "I hear my partner tell me, \"I'm proud of you.\"", type: "Words of Affirmation" },
      { text: "My partner helps me with a task.", type: "Acts of Service" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "I get to do things with my partner.", type: "Quality Time" },
      { text: "I hear supportive words from my partner.", type: "Words of Affirmation" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner does things for me instead of just talking about doing nice things.", type: "Acts of Service" },
      { text: "I feel connected to my partner through a hug.", type: "Physical Touch" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "I hear praise from my partner.", type: "Words of Affirmation" },
      { text: "my partner gives me something that shows they were really thinking about me.", type: "Receiving Gifts" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "I'm able to just be around my partner.", type: "Quality Time" },
      { text: "I get a back rub or massage from my partner.", type: "Physical Touch" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner reacts positively to something I've accomplished.", type: "Words of Affirmation" },
      { text: "my partner does something for me that I know they don't particularly enjoy.", type: "Acts of Service" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner and I kiss frequently.", type: "Physical Touch" },
      { text: "I sense my partner is showing interest in the things I care about.", type: "Quality Time" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner works on special projects with me that I have to complete.", type: "Acts of Service" },
      { text: "my partner gives me an exciting gifts.", type: "Receiving Gifts" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "I'm complimented by my partner on my appearance.", type: "Words of Affirmation" },
      { text: "my partner takes time to listen to me and really understand my feelings.", type: "Quality Time" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner and I share non-sexual touch in public.", type: "Physical Touch" },
      { text: "my partner offers to run errands for me.", type: "Acts of Service" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner does a bit more than their normal share of the responsibilities we share (around the house, work-related, etc).", type: "Acts of Service" },
      { text: "I get a gift that I know my partner put thought into choosing.", type: "Receiving Gifts" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner doesn't check their phone while we're talking.", type: "Quality Time" },
      { text: "my partner goes out of their way to do something that relieves pressure on me.", type: "Acts of Service" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "I can look forward to a holiday because of a gift I anticipate receiving.", type: "Receiving Gifts" },
      { text: "I hear the words, \"I appreciate you\" from my partner.", type: "Words of Affirmation" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner brings me a little gift after they've been traveling without me.", type: "Receiving Gifts" },
      { text: "my partner takes care of something I'm responsible to do but I feel too stressed to do at the time.", type: "Acts of Service" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner doesn't interrupt me while I'm talking.", type: "Quality Time" },
      { text: "gift giving is an important part of our relationship.", type: "Receiving Gifts" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner helps me out when they know I'm already tired.", type: "Acts of Service" },
      { text: "I get to go somewhere while spending time with my partner.", type: "Quality Time" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner and I are physically intimate.", type: "Physical Touch" },
      { text: "my partner gives me a little gift that they picked up in the course of their normal day.", type: "Receiving Gifts" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner says something encouraging to me.", type: "Words of Affirmation" },
      { text: "I get to spend time in a shared activity or hobby with my partner.", type: "Quality Time" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner surprises me with a small token of their appreciation.", type: "Receiving Gifts" },
      { text: "my partner and I touch a lot during the normal course of the day.", type: "Physical Touch" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner helps me out - especially if I know they're already busy.", type: "Acts of Service" },
      { text: "I hear my partner specifically tell me, \"I appreciate you.\"", type: "Words of Affirmation" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my  partner and I embrace after we've been apart for a while", type: "Physical Touch" },
      { text: "I hear my partner say how much I mean to them.", type: "Words of Affirmation" }
    ]
  },
  {
    question: "It's more meaningful to me when...",
    options: [
      { text: "my partner and I touch.", type: "Physical Touch" },
      { text: "I'm able to just be around my partner.", type: "Quality Time" }
    ]
  },
  // Add more questions here
];

export default questions;
