interface Result {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}
interface RootObject {
    response_code: number;
    results: Result[];
}
declare let questionDifficulty: string;
declare let questionHeading: Element | null;
declare function getConvertedData<T>(): Promise<T>;
declare function setQuestion(): void;
declare let nextbtn: HTMLElement | null;
