import { BadgePreset, defineConfig, presets } from 'sponsorkit'

const year = new Date().getFullYear()
const month = new Date().getMonth() + 1

const date = `${year}-${month.toString().padStart(2, '0')}`

export default defineConfig({
  outputDir: '.',
  formats: ['svg', 'png'],

  renders: [
    {
      name: `sponsors.${date}`,
      width: 1000,
      renderer: 'circles'
    },
    {
      name: 'sponsors.all',
      width: 1000,
      includePastSponsors: true,
      renderer: 'circles'
    }
  ]
})
