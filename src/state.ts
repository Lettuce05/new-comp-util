import { create } from 'zustand';
import { pages, GRAMMAR_INPUT } from './types';
import {v4} from 'uuid';
import Grammar from './models/Grammar';


interface AppState {
  page: string,
  grammarInput: GRAMMAR_INPUT[],
  grammar: Grammar | null,
  setGrammarInput: (input: GRAMMAR_INPUT[]) => void,
  setGrammar: (newGrammar: Grammar) => void,
  setPage: (newPage: string) => void
}

export const AppStore = create<AppState>()((set) => ({
  page: pages.FIRST,
  grammarInput: [{id: v4(), LH: '', RH: ''}],
  grammar: null,
  setGrammarInput: (input) => set({grammarInput: input}),
  setGrammar: (newGrammar) => set({grammar: newGrammar}),
  setPage: (newPage) => set({page: newPage}) 
}))