'use server'
import { Locale } from '@/lib/constants/locale'

// 辞書データをimport
const dictionaries = {
  ja: () => import('@/lib/dictionaries/ja.json').then((module) => module.default),
  en: () => import('@/lib/dictionaries/en.json').then((module) => module.default)
}

// 辞書データをReactコンポーネントに渡す
export async function getDictionary(locale: Locale) {
  return dictionaries[locale]()
}