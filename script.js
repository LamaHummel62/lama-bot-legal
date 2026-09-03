const systems = {
  moderation: {
    index: 'SYSTEM 01', title: 'Safe feels effortless.',
    description: 'Set the rules once. Lama quietly handles the rest — keeping spam, raids and trouble out of your space.',
    list: ['Smart automod filters', 'Detailed moderation logs', 'Fast, clear staff actions'], command: 'lama security status',
    prompt: 'Protection is up and running.', status: 'Server security', detail: 'All systems are protecting you', label: 'ACTIVE', question: 'Do you handle spam too?', reply: 'Always. I’ll catch it before it slows the vibe down. ✦'
  },
  tickets: {
    index: 'SYSTEM 02', title: 'Support without the scramble.',
    description: 'Give every question a tidy place to land, so your team can help faster and members always feel heard.',
    list: ['Custom ticket panels', 'Private support channels', 'Clean staff handover'], command: 'lama ticket create',
    prompt: 'A new support space is ready.', status: 'Ticket #1842', detail: 'Assigned to your support team', label: 'OPEN', question: 'Can someone help me get started?', reply: 'You got it. Your ticket is ready — a team member will be with you soon. ✦'
  },
  economy: {
    index: 'SYSTEM 03', title: 'Turn activity into fun.',
    description: 'Reward the people who make your server special with a lively economy that keeps the conversation moving.',
    list: ['Server currencies', 'Rewards & shop items', 'Friendly leaderboards'], command: 'lama balance',
    prompt: 'Your community is earning.', status: 'Llama coins', detail: '2,480 coins in your balance', label: '+ 120', question: 'What can I do with my coins?', reply: 'Spend them in your server shop, collect rewards, or climb the leaderboard. ✦'
  },
  leveling: {
    index: 'SYSTEM 04', title: 'Celebrate every hello.',
    description: 'Give members a reason to come back with levels, milestones and recognition that makes growth feel good.',
    list: ['Custom XP rules', 'Level-up messages', 'Progress leaderboards'], command: 'lama rank',
    prompt: 'Progress looks good on you.', status: 'Level 12', detail: '820 / 1,000 XP to the next level', label: '↑ 82%', question: 'How close am I to the next level?', reply: 'Almost there! Keep chatting and you’ll hit level 13 in no time. ✦'
  },
  ai: {
    index: 'SYSTEM 05', title: 'A little extra clever.',
    description: 'Bring helpful, thoughtful AI features into your community while you stay in charge of the experience.',
    list: ['Helpful AI assistance', 'Configurable access', 'Community-friendly tools'], command: 'lama ask',
    prompt: 'Lama is ready to help.', status: 'AI assistant', detail: 'Thoughtful answers, right in Discord', label: 'READY', question: 'Can you help our members too?', reply: 'That’s what I’m here for. Ask away — I’ll keep it useful and community-friendly. ✦'
  }
};

const stage = { index: document.querySelector('#stage-index'), title: document.querySelector('#stage-title'), description: document.querySelector('#stage-description'), list: document.querySelector('#stage-list'), command: document.querySelector('#command-preview'), body: document.querySelector('#terminal-body') };
let currentSystem = 'moderation';

function renderSystem(key) {
  const item = systems[key];
  currentSystem = key;
  document.querySelectorAll('.feature-tab').forEach(tab => { const active = tab.dataset.feature === key; tab.classList.toggle('is-active', active); tab.setAttribute('aria-selected', active); });
  stage.body.classList.add('is-switching');
  setTimeout(() => {
    stage.index.textContent = item.index;
    stage.title.textContent = item.title;
    stage.description.textContent = item.description;
    stage.list.innerHTML = item.list.map(line => `<li>${line}</li>`).join('');
    stage.command.textContent = item.command;
    stage.body.innerHTML = `<div class="message bot-message"><span class="bot-avatar">L</span><div><b>Lama <small>BOT</small></b><p>${item.prompt}</p><div class="status-module"><span class="status-ring">✓</span><div><strong>${item.status}</strong><small>${item.detail}</small></div><span class="status-label">${item.label}</span></div></div></div><div class="message user-message"><span>${item.question}</span></div><div class="message bot-message reply"><span class="bot-avatar">L</span><div><b>Lama <small>BOT</small></b><p>${item.reply}</p></div></div>`;
    stage.body.classList.remove('is-switching');
  }, 150);
}

document.querySelectorAll('.feature-tab').forEach(tab => tab.addEventListener('click', () => renderSystem(tab.dataset.feature)));

const toast = document.querySelector('.toast');
function runCommand() { toast.textContent = `${systems[currentSystem].command} sent to Lama ✦`; toast.classList.add('is-visible'); setTimeout(() => toast.classList.remove('is-visible'), 2500); }
document.querySelector('#run-command').addEventListener('click', runCommand);
document.querySelector('#try-button').addEventListener('click', runCommand);

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => { const open = menu.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', open); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); }));

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const stats = document.querySelector('.stats');
let counted = false;
new IntersectionObserver(entries => { if (!entries[0].isIntersecting || counted) return; counted = true; document.querySelectorAll('[data-count]').forEach(node => { const target = Number(node.dataset.count); let value = 0; const timer = setInterval(() => { value += 1; node.textContent = value; if (value === target) clearInterval(timer); }, 115); }); }, { threshold:.5 }).observe(stats);

window.addEventListener('pointermove', event => { document.documentElement.style.setProperty('--x', `${event.clientX}px`); document.documentElement.style.setProperty('--y', `${event.clientY}px`); }, { passive:true });
