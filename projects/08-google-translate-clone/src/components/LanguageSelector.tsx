import { Form } from "react-bootstrap";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";
import React, { FC } from "react";
import { FromLanguage, Language, SectionTypes } from "../types.d";

type Props =
    | { type: SectionTypes.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: SectionTypes.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }

    return (
        <Form.Select arial-aria-label="selecciona el idioma" onChange={handleChange} value={value}>
            {type === SectionTypes.From && <option value={AUTO_LANGUAGE}>Detect language</option>}

            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}