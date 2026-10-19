<template>
  <div id="top" class="site-shell">
    <header class="site-header">
      <div class="nav-wrap container">
        <NuxtLink :to="localePath('/')" class="wordmark" aria-label="Davi Rangel - home">
          <span>DR</span>
          <small>Full Stack Developer</small>
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
          <a class="icon-button" href="mailto:davirangelcamara@gmail.com" :aria-label="t('nav.contact')">
            <Icon name="lucide:mail" />
          </a>
        </div>
      </div>
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
            <a class="button button-secondary" href="mailto:davirangelcamara@gmail.com">{{ t('hero.secondaryCta') }}</a>
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
          <article v-reveal class="case-study case-featured">
            <div class="case-copy">
              <div class="case-topline"><span>{{ content.work.cases[0].type }}</span><span>{{ content.work.cases[0].year }}</span></div>
              <h3>{{ content.work.cases[0].title }}</h3>
              <p>{{ content.work.cases[0].description }}</p>
              <ul class="outcome-list">
                <li v-for="outcome in content.work.cases[0].outcomes" :key="outcome"><Icon name="lucide:check" />{{ outcome }}</li>
              </ul>
              <div class="tag-list"><span v-for="tag in content.work.cases[0].tags" :key="tag">{{ tag }}</span></div>
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

          <article v-for="(item, index) in content.work.cases.slice(1)" :key="item.title" v-reveal="Number(index) * 100" class="case-study case-compact">
            <div class="case-number">0{{ Number(index) + 2 }}</div>
            <div>
              <div class="case-topline"><span>{{ item.type }}</span><span>{{ item.year }}</span></div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <div class="tag-list"><span v-for="tag in item.tags" :key="tag">{{ tag }}</span></div>
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
            <article v-for="(job, index) in content.experience.items" :key="job.company" v-reveal="Number(index) * 70" class="timeline-item">
              <div class="timeline-marker"><span>0{{ Number(index) + 1 }}</span></div>
              <div class="timeline-period">{{ job.period }}</div>
              <div class="timeline-role"><h3>{{ job.role }}</h3><p>{{ job.company }}</p></div>
              <div class="timeline-details"><p>{{ job.summary }}</p><span v-for="highlight in job.highlights" :key="highlight">{{ highlight }}</span></div>
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
            <a class="contact-link" href="mailto:davirangelcamara@gmail.com">davirangelcamara@gmail.com <Icon name="lucide:arrow-up-right" /></a>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/davirangelcamara" target="_blank" rel="noreferrer">LinkedIn <Icon name="lucide:arrow-up-right" /></a>
              <span>Brasília, Brazil</span>
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
  localePreference.value = selectedLocale
  await setLocale(selectedLocale)
}

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
</script>
