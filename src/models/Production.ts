import Grammar from "./Grammar"

export type Production = ProductionTerm[]

export function getProduction(stringTerms: string[]){
    const terms = []
    for (const term of stringTerms){
        let currentTerm = term.trim()
        if (Grammar.isTerminal(currentTerm)){
            terms.push(new ProductionTerm(currentTerm, { isTerminal: true }))
        } else if (Grammar.isNonTerminal(currentTerm)) {
            terms.push(new ProductionTerm(currentTerm, { isNonTerminal: true }))
        } else if (currentTerm === Grammar.EPSILON) {
            terms.push(new ProductionTerm(Grammar.EPSILON, { isEpsilon: true }))
        }
    }

    return terms;
}

type TermType = {
    isNonTerminal?: boolean, 
    isTerminal?: boolean, 
    isEpsilon?: boolean
}

class ProductionTerm {
    lexeme: string
    isNonTerminal: boolean
    isTerminal: boolean
    isEpsilon: boolean

    constructor(lexeme: string, termType: TermType){
        this.lexeme = lexeme;
        this.isNonTerminal = termType.isNonTerminal ?? false;
        this.isTerminal = termType.isTerminal ?? false;
        this.isEpsilon = termType.isEpsilon ?? false;
    }
}