'use client'

import minus from '@/images/icons/icon-minus.svg';
import plus from '@/images/icons/icon-plus.svg';
import Image from 'next/image';
import styles from './Form.module.css';
import Select from './Select';
import { useActionState, useEffect, useRef, useState } from 'react';
import { maskInputs } from '@/utils/maskInputs';
import { validateInputs } from '@/utils/validateInputs';
import { reserveFormAction } from '@/actions/formAction';
import { useFormStatus } from 'react-dom';

const INITIAL_VALUES = {
    name: '',
    email: '',
    dateMonth: '',
    dateDay: '',
    dateYear: '',
    timeHour: '',
    timeMin: ''
}

export type KeyNames = keyof typeof INITIAL_VALUES;

export type InvalidInputsType = {
    [index in KeyNames]: boolean
}

const ERR_MESSAGES = {
    name: 'This field is required',
    email: 'Please use a valid email address',
    date: 'This field is incomplete',
    time: 'This field is incomplete'
}

export default function Form() {

    const [inputVals, setInputVals] = useState(INITIAL_VALUES);
    const [invalidInputs, setInvalidInputs] = useState<InvalidInputsType>({
        name: false,
        email: false,
        dateMonth: false,
        dateDay: false,
        dateYear: false,
        timeHour: false,
        timeMin: false
    })
    const [numPeople, setNumPeople] = useState(1);

    const unfocusableRef = useRef<HTMLInputElement>(null);

    const [state, formData] = useActionState(reserveFormAction, {})

    const handleChange = (value: string, key: KeyNames) => {
        if (invalidInputs[key]) {
            const isValid = validateInputs(value, key);
            if (isValid) {
                setInvalidInputs(prevState => {
                    return {...prevState, [key]: false}
                })
            }
        }
        const maskedVal = maskInputs(value, key);
        setInputVals(prevState => {
            return { ...prevState, [key]: maskedVal }
        })
    }

    const handleBlur = (value: string, key: KeyNames) => {
        const isValid = validateInputs(value, key);

        if (!invalidInputs[key] && !isValid) {
            setInvalidInputs(prevState => {
                return {...prevState, [key]: true}
            })
        }
    }
 
    const updateNumPeople = (n: number) => {
        if (numPeople <= 1 && n === -1) {
            return
        }
        setNumPeople(prevState => prevState + n);
    }

    useEffect(() => {
        if (state && Object.keys(state).length > 0) {
            console.log(state)
            setInvalidInputs(prevState => {
                return {...prevState, ...state}
            })
        }
    }, [state])

    return (       
        <form className={styles.form} action={formData}>
            <div className={invalidInputs.name ? `${styles['invalid-field']} ${styles['field-container']}` : styles['field-container']}>
                <input 
                    required
                    type='text' 
                    name='name' 
                    id='name'
                    placeholder='Name'
                    value={inputVals.name}
                    onChange={e => handleChange(e.target.value, 'name')}
                    onBlur={e => handleBlur(e.target.value, 'name')}
                    autoComplete='name'
                    aria-label='name'
                    aria-invalid={invalidInputs.name ? true : false}
                    aria-describedby='name-err'
                />
                { invalidInputs.name && <span aria-live='polite' className={styles['err-message']} id='name-err'>{ERR_MESSAGES.name}</span>}
            </div>
            <div className={invalidInputs.email ? `${styles['invalid-field']} ${styles['field-container']}` : styles['field-container']}>
                <input 
                    required
                    type='email' 
                    name='email' 
                    id='email'
                    placeholder='Email'
                    value={inputVals.email}
                    onChange={e => handleChange(e.target.value, 'email')}
                    onBlur={e => handleBlur(e.target.value, 'email')}
                    autoComplete='email'
                    aria-label='email'
                    aria-invalid={invalidInputs.email ? true : false}
                    aria-describedby='email-err'
                />
                { invalidInputs.email && <span aria-live='polite' className={styles['err-message']} id='email-err'>{ERR_MESSAGES.email}</span>}
            </div>
            <div className={(invalidInputs.dateMonth || invalidInputs.dateDay || invalidInputs.dateYear) 
                ? `${styles['invalid-field']} ${styles['field-container']}` 
                : styles['field-container']}
            >
                <div className={styles['label-wrapper']}>
                    <label htmlFor='date-month'>Pick a date</label>
                    { (invalidInputs.dateMonth || invalidInputs.dateDay || invalidInputs.dateYear) &&
                        <span aria-live='polite' className={styles['err-message']} id='date-err'>{ERR_MESSAGES.date}</span>
                    }
                </div>
                <div className={styles['inputs-wrapper']}>
                    <input 
                        type='text'
                        id='date-month' 
                        name='date-month' 
                        placeholder='MM'
                        value={inputVals.dateMonth}
                        onChange={e => handleChange(e.target.value, 'dateMonth')}
                        aria-label='month'
                        aria-invalid={invalidInputs.dateMonth ? true : false}
                        aria-describedby={invalidInputs.dateMonth ? 'date-err' : undefined}
                    />
                    <input 
                        type='text'
                        id='date-day'
                        name='date-day' 
                        placeholder='DD'
                        value={inputVals.dateDay}
                        onChange={e => handleChange(e.target.value, 'dateDay')}
                        aria-label='day'
                        aria-invalid={invalidInputs.dateDay ? true : false}
                        aria-describedby={invalidInputs.dateDay ? 'date-err' : undefined}
                    />
                    <input 
                        type='text'
                        id='date-year' 
                        name='date-year' 
                        placeholder='YYYY'
                        value={inputVals.dateYear}
                        onChange={e => handleChange(e.target.value, 'dateYear')}
                        aria-label='year'
                        aria-invalid={invalidInputs.dateYear ? true : false}
                        aria-describedby={invalidInputs.dateYear ? 'date-err' : undefined}
                    />
                </div>
            </div>
            <div className={(invalidInputs.timeHour || invalidInputs.timeMin) 
                ? `${styles['invalid-field']} ${styles['field-container']}` 
                : styles['field-container']}
            >
                <div className={styles['label-wrapper']}>
                    <label htmlFor='time-hour'>Pick a time</label>
                    { (invalidInputs.timeHour || invalidInputs.timeMin) &&
                        <span aria-live='polite' className={styles['err-message']} id='time-err'>{ERR_MESSAGES.time}</span>
                    }
                </div>
                <div className={styles['inputs-wrapper']}>
                    <input 
                        type='text'
                        id='time-hour' 
                        name='time-hour' 
                        placeholder='09'
                        value={inputVals.timeHour}
                        onChange={e => handleChange(e.target.value, 'timeHour')}
                        aria-label='hour'
                        aria-invalid={invalidInputs.timeHour ? true : false}
                        aria-describedby={invalidInputs.timeHour ? 'time-err' : undefined}
                    />
                    <input 
                        type='text'
                        id='time-min' 
                        name='time-min'
                        placeholder='00'
                        value={inputVals.timeMin}
                        onChange={e => handleChange(e.target.value, 'timeMin')}
                        aria-label='minute'
                        aria-invalid={invalidInputs.timeMin ? true : false}
                        aria-describedby={invalidInputs.timeMin ? 'time-err' : undefined}
                    />
                    <div>
                        <Select />
                    </div>
                </div>
            </div>
            <div className={styles['field-container']}>
                <div className={styles['people-field']}>
                    <button 
                        type='button'
                        onClick={() => updateNumPeople(-1)}
                        aria-label='decrease the number of people'
                    >
                        <Image src={minus} alt='' />
                    </button>
                    <input 
                        type='text' 
                        name='number-of-people'
                        readOnly 
                        value={`${numPeople} people`}
                        ref={unfocusableRef}
                        onFocus={() => unfocusableRef.current?.blur()}
                    />
                    <button 
                        type='button'
                        onClick={() => updateNumPeople(1)}
                        aria-label='increase the number of people'
                    >
                        <Image src={plus} alt='' />
                    </button>
                </div>
            </div>
            <SubmitButton />
        </form>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button type='submit' aria-disabled={pending}>
            { pending ? 'RESERVING...' : 'MAKE RESERVATION'}
        </button>
    )
}