<template>
  <div id="top" class="site-shell">
    <header class="site-header">
      <div class="nav-wrap container">
        <NuxtLink :to="localePath('/')" class="wordmark" aria-label="Davi Rangel - home" @click="mobileMenuOpen = false">
          <span>DR</span>
          <small>Davi Rangel</small>
        </NuxtLink>

        <nav class="desktop-nav" :aria-label="t('nav.label')">
          <button type="button" @click="scrollTo('work')">{{ t('nav.work') }}</button>
          <button type="button" @click="scrollTo('experience')">{{ t('nav.experience') }}</button>
          <button type="button" @click="scrollTo('expertise')">{{ t('nav.expertise') }}</button>
        </nav>

        <div class="nav-actions">
          <button type="button" class="locale-switch" :aria-label="t('nav.languageLabel')" @click="changeLocale">
            {{ nextLocale.toUpperCase() }}
          </button>
          <a class="icon-button" :href="emailHref" :aria-label="t('nav.contact')">
            <Icon name="lucide:mail" />
          </a>
          <button
            type="button"
            class="icon-button mobile-menu-toggle"
            :aria-label="t('nav.menuLabel')"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-navigation"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" />
          </button>
        </div>
      </div>

      <nav v-show="mobileMenuOpen" id="mobile-navigation" class="mobile-nav" :aria-label="t('nav.label')">
        <div class="container">
          <button type="button" @click="navigateToSection('work')">{{ t('nav.work') }}</button>
          <button type="button" @click="navigateToSection('experience')">{{ t('nav.experience') }}</button>
          <button type="button" @click="navigateToSection('expertise')">{{ t('nav.expertise') }}</button>
          <a :href="resumeHref" download @click="mobileMenuOpen = false">
            {{ t('nav.resume') }}
            <Icon name="lucide:download" />
          </a>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero container" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="status-dot" />{{ t('hero.eyebrow') }}</p>
          <h1 id="hero-title">{{ t('hero.title') }}</h1>
          <p class="hero-lede">{{ t('hero.lede') }}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#work">
              {{ t('hero.primaryCta') }}
              <Icon name="lucide:arrow-down-right" />
            </a>
            <a class="button button-secondary" :href="emailHref">{{ t('hero.secondaryCta') }}</a>
          </div>
          <div class="hero-meta">
            <span><Icon name="lucide:map-pin" />{{ t('hero.location') }}</span>
            <span><Icon name="lucide:plane" />{{ t('hero.relocation') }}</span>
          </div>
        </div>

        <div class="hero-visual">
          <div class="portrait-frame">
            <img src="/images/davi-rangel.png" :alt="t('hero.portraitAlt')">
            <div class="portrait-caption">
              <span>{{ t('hero.captionRole') }}</span>
              <strong>{{ t('hero.captionFocus') }}</strong>
            </div>
          </div>
          <div class="code-note" aria-hidden="true">
            <span>01</span>
            <code>build · lead · evolve</code>
          </div>
        </div>
      </section>

      <section class="proof-strip" :aria-label="t('proof.label')">
        <div class="container proof-grid">
          <article v-for="(item, index) in content.proof.items" :key="item.value" v-reveal="Number(index) * 80">
            <strong>{{ item.value }}</strong>
            <span>{{ item.label }}</span>
          </article>
        </div>
      </section>

      <section id="work" class="section selected-work container">
        <div v-reveal class="section-heading">
          <div>
            <p class="section-index">01 / {{ t('work.eyebrow') }}</p>
            <h2>{{ t('work.title') }}</h2>
          </div>
          <p>{{ t('work.intro') }}</p>
        </div>

        <div class="case-studies">
          <article
            v-reveal
            class="case-study case-featured interactive-detail"
            role="button"
            tabindex="0"
            aria-haspopup="dialog"
            :aria-label="t('details.openNamed', { title: content.work.cases[0].title })"
            @click="openDetail('work', 0, $event)"
            @keydown.enter.prevent="openDetail('work', 0, $event)"
            @keydown.space.prevent="openDetail('work', 0, $event)"
          >
            <div class="case-copy">
              <div class="case-topline"><span>{{ content.work.cases[0].type }}</span><span>{{ content.work.cases[0].year }}</span></div>
              <h3>{{ content.work.cases[0].title }}</h3>
              <p>{{ content.work.cases[0].description }}</p>
              <ul class="outcome-list">
                <li v-for="outcome in content.work.cases[0].outcomes" :key="outcome"><Icon name="lucide:check" />{{ outcome }}</li>
              </ul>
              <div class="tag-list"><span v-for="tag in content.work.cases[0].tags" :key="tag">{{ tag }}</span></div>
              <div class="detail-hint">{{ t('details.open') }} <Icon name="lucide:arrow-up-right" /></div>
            </div>
            <div class="architecture-visual" :aria-label="content.work.cases[0].visualLabel" role="img">
              <div class="visual-toolbar"><span /><span /><span /><code>integration.flow</code></div>
              <div class="flow-grid">
                <div class="flow-node flow-source"><Icon name="lucide:store" /><span>Marketplace</span></div>
                <Icon class="flow-arrow" name="lucide:arrow-right" />
                <div class="flow-node flow-api"><Icon name="lucide:braces" /><span>Integration API</span></div>
                <Icon class="flow-arrow" name="lucide:arrow-right" />
                <div class="flow-node flow-erp"><Icon name="lucide:database" /><span>ERP</span></div>
              </div>
              <div class="visual-metric"><span>{{ t('work.reliability') }}</span><strong>-70%<small>{{ t('work.errors') }}</small></strong></div>
            </div>
          </article>

          <article
            v-reveal="100"
            class="case-study case-compact case-split--left interactive-detail"
            role="button"
            tabindex="0"
            aria-haspopup="dialog"
            :aria-label="t('details.openNamed', { title: content.work.cases[1].title })"
            @click="openDetail('work', 1, $event)"
            @keydown.enter.prevent="openDetail('work', 1, $event)"
            @keydown.space.prevent="openDetail('work', 1, $event)"
          >
            <div class="case-number">02</div>
            <div>
              <div class="case-topline"><span>{{ content.work.cases[1].type }}</span><span>{{ content.work.cases[1].year }}</span></div>
              <h3>{{ content.work.cases[1].title }}</h3>
              <p>{{ content.work.cases[1].description }}</p>
              <div class="tag-list"><span v-for="tag in content.work.cases[1].tags" :key="tag">{{ tag }}</span></div>
              <div class="detail-hint">{{ t('details.open') }} <Icon name="lucide:arrow-up-right" /></div>
            </div>
          </article>

          <article
            v-reveal="200"
            class="case-study case-compact case-split--right interactive-detail"
            role="button"
            tabindex="0"
            aria-haspopup="dialog"
            :aria-label="t('details.openNamed', { title: content.work.cases[2].title })"
            @click="openDetail('work', 2, $event)"
            @keydown.enter.prevent="openDetail('work', 2, $event)"
            @keydown.space.prevent="openDetail('work', 2, $event)"
          >
            <div class="case-number">03</div>
            <div>
              <div class="case-topline"><span>{{ content.work.cases[2].type }}</span><span>{{ content.work.cases[2].year }}</span></div>
              <h3>{{ content.work.cases[2].title }}</h3>
              <p>{{ content.work.cases[2].description }}</p>
              <div class="tag-list"><span v-for="tag in content.work.cases[2].tags" :key="tag">{{ tag }}</span></div>
              <div class="detail-hint">{{ t('details.open') }} <Icon name="lucide:arrow-up-right" /></div>
            </div>
          </article>

          <div v-reveal class="project-divider">
            <p class="section-index">{{ t('work.independentEyebrow') }}</p>
            <div>
              <h3>{{ t('work.independentTitle') }}</h3>
              <p>{{ t('work.independentIntro') }}</p>
            </div>
          </div>

          <article
            v-for="(item, index) in content.work.cases.slice(3)"
            :key="item.title"
            v-reveal="Number(index) * 100"
            class="case-study case-compact case-independent interactive-detail"
            :class="Number(index) % 2 === 0 ? 'case-independent--left' : 'case-independent--right'"
            role="button"
            tabindex="0"
            aria-haspopup="dialog"
            :aria-label="t('details.openNamed', { title: item.title })"
            @click="openDetail('work', Number(index) + 3, $event)"
            @keydown.enter.prevent="openDetail('work', Number(index) + 3, $event)"
            @keydown.space.prevent="openDetail('work', Number(index) + 3, $event)"
          >
            <div class="case-number">0{{ Number(index) + 4 }}</div>
            <div>
              <div class="case-topline"><span>{{ item.type }}</span><span>{{ item.year }}</span></div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <div class="tag-list"><span v-for="tag in item.tags" :key="tag">{{ tag }}</span></div>
              <div class="detail-hint">{{ t('details.open') }} <Icon name="lucide:arrow-up-right" /></div>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" class="section experience-section">
        <div class="container">
          <div v-reveal class="section-heading light-heading">
            <div>
              <p class="section-index">02 / {{ t('experience.eyebrow') }}</p>
              <h2>{{ t('experience.title') }}</h2>
            </div>
            <p>{{ t('experience.intro') }}</p>
          </div>

          <div class="timeline">
            <article
              v-for="(job, index) in content.experience.items"
              :key="job.company"
              v-reveal="Number(index) * 70"
              class="timeline-item interactive-detail"
              role="button"
              tabindex="0"
              aria-haspopup="dialog"
              :aria-label="t('details.openNamed', { title: `${job.role} - ${job.company}` })"
              @click="openDetail('experience', Number(index), $event)"
              @keydown.enter.prevent="openDetail('experience', Number(index), $event)"
              @keydown.space.prevent="openDetail('experience', Number(index), $event)"
            >
              <div class="timeline-marker"><span>0{{ Number(index) + 1 }}</span></div>
              <div class="timeline-period">{{ job.period }}</div>
              <div class="timeline-role"><h3>{{ job.role }}</h3><p>{{ job.company }}</p></div>
              <div class="timeline-details">
                <p>{{ job.summary }}</p>
                <span v-for="highlight in job.highlights" :key="highlight">{{ highlight }}</span>
                <div class="detail-hint detail-hint--dark">{{ t('details.open') }} <Icon name="lucide:arrow-up-right" /></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="expertise" class="section expertise container">
        <div v-reveal class="section-heading">
          <div>
            <p class="section-index">03 / {{ t('expertise.eyebrow') }}</p>
            <h2>{{ t('expertise.title') }}</h2>
          </div>
          <p>{{ t('expertise.intro') }}</p>
        </div>

        <div class="expertise-grid">
          <article v-for="(group, index) in content.expertise.groups" :key="group.title" v-reveal="Number(index) * 90" class="expertise-group">
            <Icon :name="group.icon" /><h3>{{ group.title }}</h3><p>{{ group.description }}</p>
            <div class="skill-list"><span v-for="skill in group.skills" :key="skill">{{ skill }}</span></div>
          </article>
        </div>

        <div v-reveal class="principles">
          <p>{{ t('expertise.principlesLabel') }}</p>
          <div><span v-for="principle in content.expertise.principles" :key="principle">{{ principle }}</span></div>
        </div>
      </section>

      <section class="education-band">
        <div v-reveal class="container education-grid">
          <div><p class="section-index">04 / {{ t('education.eyebrow') }}</p><h2>{{ t('education.title') }}</h2></div>
          <div class="education-item"><span>{{ t('education.degree') }}</span><strong>{{ t('education.school') }}</strong><small>{{ t('education.period') }}</small></div>
          <div class="language-item"><span v-for="language in content.education.languages" :key="language.name"><strong>{{ language.name }}</strong>{{ language.level }}</span></div>
        </div>
      </section>

      <section id="contact" class="contact-section">
        <div v-reveal class="container contact-grid">
          <div><p class="section-index">05 / {{ t('contact.eyebrow') }}</p><h2>{{ t('contact.title') }}</h2></div>
          <div class="contact-copy">
            <p>{{ t('contact.text') }}</p>
            <div class="contact-links">
              <a class="contact-link" :href="emailHref">
                <span class="contact-channel"><Icon name="lucide:mail" />davirangelcamara@gmail.com</span>
                <Icon name="lucide:arrow-up-right" />
              </a>
              <a class="contact-link contact-link--whatsapp" :href="whatsappHref" target="_blank" rel="noreferrer">
                <span class="contact-channel"><Icon name="lucide:message-circle" />{{ t('contact.whatsappLabel') }}</span>
                <small>+55 61 99127-2679</small>
                <Icon name="lucide:arrow-up-right" />
              </a>
            </div>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/davirangelcamara" target="_blank" rel="noreferrer">LinkedIn <Icon name="lucide:arrow-up-right" /></a>
              <a :href="resumeHref" download>{{ t('contact.resume') }} <Icon name="lucide:download" /></a>
              <span>{{ t('hero.location') }}</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container">
        <span>© {{ new Date().getFullYear() }} Davi Rangel</span>
        <span>{{ t('footer.note') }}</span>
        <a href="#top" @click.prevent="scrollTo('top')">{{ t('footer.backToTop') }} <Icon name="lucide:arrow-up" /></a>
      </div>
    </footer>

    <Teleport to="body">
      <Transition name="detail-modal">
        <div v-if="activeDetail" class="detail-modal-backdrop" @mousedown.self="closeDetail">
          <section
            ref="modalPanel"
            class="detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="detail-modal-title"
            tabindex="-1"
          >
            <header class="detail-modal-header">
              <div class="detail-modal-meta">
                <span>{{ activeDetail.label }}</span>
                <span>{{ activeDetail.period }}</span>
              </div>
              <button type="button" class="detail-modal-close" :aria-label="t('details.close')" @click="closeDetail">
                <Icon name="lucide:x" />
              </button>
            </header>

            <div class="detail-modal-body">
              <p class="detail-modal-eyebrow">{{ activeDetail.eyebrow }}</p>
              <h2 id="detail-modal-title">{{ activeDetail.title }}</h2>
              <strong v-if="activeDetail.company" class="detail-modal-company">{{ activeDetail.company }}</strong>
              <p class="detail-modal-summary">{{ activeDetail.summary }}</p>

              <div v-if="activeDetail.kind === 'experience'" class="detail-modal-section">
                <h3>{{ t('details.timeline') }}</h3>
                <ol class="company-position-timeline">
                  <li v-for="position in activeDetail.positions" :key="`${position.role}-${position.period}`">
                    <span class="position-marker" aria-hidden="true" />
                    <article class="position-content">
                      <header class="position-header">
                        <h4>{{ position.role }}</h4>
                        <p>{{ position.period }} <span>· {{ position.duration }}</span></p>
                      </header>
                      <p class="position-intro">{{ position.intro }}</p>
                      <div class="position-responsibilities">
                        <h5>{{ t('details.responsibilities') }}</h5>
                        <ul>
                          <li v-for="responsibility in position.responsibilities" :key="responsibility">
                            <Icon name="lucide:check" />
                            <span>{{ responsibility }}</span>
                          </li>
                        </ul>
                      </div>
                      <p class="position-closing">{{ position.closing }}</p>
                      <div class="tag-list position-technologies">
                        <span v-for="technology in position.technologies" :key="technology">{{ technology }}</span>
                      </div>
                    </article>
                  </li>
                </ol>
              </div>

              <div v-else class="detail-modal-section">
                <h3>{{ t('details.contributions') }}</h3>
                <ul>
                  <li v-for="item in activeDetail.contributions" :key="item">
                    <Icon name="lucide:check" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <div v-if="activeDetail.kind === 'work'" class="detail-modal-section">
                <h3>{{ t('details.technologies') }}</h3>
                <div class="tag-list">
                  <span v-for="tag in activeDetail.tags" :key="tag">{{ tag }}</span>
                </div>
              </div>

              <div v-if="activeDetail.links.length" class="detail-modal-actions">
                <a
                  v-for="link in activeDetail.links"
                  :key="link.url"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="button button-primary"
                >
                  {{ link.label }}
                  <Icon name="lucide:arrow-up-right" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type { Directive } from 'vue'

const { locale, setLocale, t, tm, rt } = useI18n()
const localePath = useLocalePath()

const resolveMessages = (value: any): any => {
  if (Array.isArray(value)) {
    return value.map(resolveMessages)
  }

  if (value && typeof value === 'object') {
    if ('type' in value && ('body' in value || 'items' in value)) {
      return rt(value)
    }

    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, resolveMessages(child)])
    )
  }

  return value
}

const content = computed(() => ({
  proof: resolveMessages(tm('proof')),
  work: resolveMessages(tm('work')),
  experience: resolveMessages(tm('experience')),
  expertise: resolveMessages(tm('expertise')),
  education: resolveMessages(tm('education'))
}))

type DetailKind = 'work' | 'experience'

const selectedDetail = ref<{ kind: DetailKind, index: number } | null>(null)
const modalPanel = ref<HTMLElement | null>(null)
const mobileMenuOpen = ref(false)
let detailTrigger: HTMLElement | null = null

const formatCurrentDuration = (startDate: string) => {
  const [year, month] = startDate.split('-')
  const startYear = Number(year)
  const startMonth = Number(month)
  const now = new Date()
  const totalMonths = Math.max(1, (now.getFullYear() - startYear) * 12 + now.getMonth() - startMonth + 2)
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const parts = []

  if (years) parts.push(`${years} ${t(years === 1 ? 'details.year' : 'details.years')}`)
  if (months) parts.push(`${months} ${t(months === 1 ? 'details.month' : 'details.months')}`)

  return parts.join(' ')
}

const activeDetail = computed(() => {
  if (!selectedDetail.value) return null

  const { kind, index } = selectedDetail.value

  if (kind === 'work') {
    const item = content.value.work.cases[index]
    if (!item) return null

    return {
      kind,
      label: t('details.projectLabel'),
      period: item.year,
      eyebrow: item.type,
      title: item.title,
      company: '',
      summary: item.description,
      contributions: item.outcomes || [],
      positions: [],
      tags: item.tags || [],
      links: item.links || []
    }
  }

  const item = content.value.experience.items[index]
  if (!item) return null

  return {
    kind,
    label: t('details.experienceLabel'),
    period: item.period,
    eyebrow: item.role,
    title: item.company,
    company: '',
    summary: item.summary,
    contributions: [],
    positions: (item.positions || []).map((position: any) => ({
      ...position,
      duration: position.startDate ? formatCurrentDuration(position.startDate) : position.duration
    })),
    tags: item.highlights || [],
    links: []
  }
})

const openDetail = (kind: DetailKind, index: number, event?: Event) => {
  detailTrigger = event?.currentTarget instanceof HTMLElement ? event.currentTarget : null
  selectedDetail.value = { kind, index }
  nextTick(() => modalPanel.value?.focus())
}

const closeDetail = () => {
  const trigger = detailTrigger
  selectedDetail.value = null
  detailTrigger = null
  nextTick(() => trigger?.focus())
}

const handleModalKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && selectedDetail.value) {
    closeDetail()
    return
  }

  if (event.key === 'Escape' && mobileMenuOpen.value) {
    mobileMenuOpen.value = false
    return
  }

  if (event.key !== 'Tab' || !selectedDetail.value || !modalPanel.value) return

  const focusableElements = Array.from(
    modalPanel.value.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])')
  ).filter(element => !element.hasAttribute('disabled'))

  const firstElement = focusableElements[0]
  const lastElement = focusableElements.at(-1)
  if (!firstElement || !lastElement) return

  if (event.shiftKey && (document.activeElement === firstElement || document.activeElement === modalPanel.value)) {
    event.preventDefault()
    lastElement.focus()
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault()
    firstElement.focus()
  }
}

watch(selectedDetail, (selection) => {
  document.body.classList.toggle('modal-open', Boolean(selection))
})

onMounted(() => window.addEventListener('keydown', handleModalKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleModalKeydown)
  document.body.classList.remove('modal-open')
})

const nextLocale = computed(() => locale.value === 'en' ? 'pt' : 'en')
const localePreference = useCookie<'en' | 'pt'>('portfolio_locale', {
  default: () => 'en',
  maxAge: 60 * 60 * 24 * 365,
  sameSite: 'lax'
})

if (localePreference.value !== locale.value) {
  await setLocale(localePreference.value)
}

const changeLocale = async () => {
  const selectedLocale = nextLocale.value
  mobileMenuOpen.value = false
  localePreference.value = selectedLocale
  await setLocale(selectedLocale)
}

const resumeHref = computed(() => locale.value === 'pt'
  ? '/cv/davi-rangel-desenvolvedor-full-stack.pdf'
  : '/cv/davi-rangel-full-stack-developer.pdf')

const emailHref = computed(() => {
  const subject = encodeURIComponent(t('contact.emailSubject'))
  const body = encodeURIComponent([
    t('contact.messageGreeting'),
    '',
    t('contact.emailIntro'),
    '',
    `${t('contact.nameLabel')}: ${t('contact.namePlaceholder')}`,
    `${t('contact.companyLabel')}: ${t('contact.companyPlaceholder')}`,
    `${t('contact.contextLabel')}: ${t('contact.contextPlaceholder')}`,
    '',
    t('contact.conversationQuestion'),
    '',
    t('contact.emailClosing')
  ].join('\r\n'))

  return `mailto:davirangelcamara@gmail.com?subject=${subject}&body=${body}`
})

const whatsappHref = computed(() => {
  const message = [
    `*${t('contact.whatsappHeading')}*`,
    '',
    t('contact.messageGreeting'),
    t('contact.whatsappIntro'),
    '',
    `*${t('contact.nameLabel')}:* ${t('contact.namePlaceholder')}`,
    `*${t('contact.companyLabel')}:* ${t('contact.companyPlaceholder')}`,
    `*${t('contact.contextLabel')}:* ${t('contact.contextPlaceholder')}`,
    '',
    t('contact.whatsappQuestion')
  ].map(line => encodeURIComponent(line)).join('%0A')

  return `https://wa.me/5561991272679?text=${message}`
})

const revealObservers = new WeakMap<HTMLElement, IntersectionObserver>()
const vReveal: Directive<HTMLElement, number> = {
  mounted(el, binding) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    el.classList.add('reveal-ready')
    el.style.setProperty('--reveal-delay', `${binding.value || 0}ms`)

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return

      if (entry.isIntersecting) {
        el.classList.add('is-visible')
        return
      }

      // When scrolling back up, the element exits below the viewport.
      // Reset it so the reveal can play again on the next downward pass.
      if (entry.boundingClientRect.top > 0) {
        el.classList.remove('is-visible')
      }
    }, {
      threshold: 0.14,
      rootMargin: '0px 0px -8% 0px'
    })

    revealObservers.set(el, observer)
    observer.observe(el)
  },
  unmounted(el) {
    revealObservers.get(el)?.disconnect()
    revealObservers.delete(el)
  }
}

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  title: t('meta.title'),
  meta: [
    { name: 'description', content: t('meta.description') },
    { property: 'og:title', content: t('meta.title') },
    { property: 'og:description', content: t('meta.description') },
    { property: 'og:type', content: 'website' }
  ]
}))

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const navigateToSection = (id: string) => {
  mobileMenuOpen.value = false
  scrollTo(id)
}
</script>
