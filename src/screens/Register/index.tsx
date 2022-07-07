import React, { useState } from "react";
import { Modal } from "react-native";
import { useForm } from "react-hook-form";

import {
    Input,
    InputForm,
    Button,
    TransactionTypeButton,
    CategorySelectButton
} from "../../components";

import { CategorySelect } from '../CategorySelect'

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionType
} from "./styles";

interface FormData {
    name: string;
    amount: string;
}

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });

    const {
        control,
        handleSubmit,
    } = useForm();

    function handleTransactionsTypeSelect(type: 'up' | 'down'){
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    }
    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
    }
    function handleRegister(form: FormData){
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }
        console.log(data)
    }


    return(
        <Container>

            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <InputForm
                        name="name"
                        control={control}
                        placeholder="Nome"
                    />
                    <InputForm
                        name="amount"
                        control={control}
                        placeholder="Preço"
                    />
                    <TransactionType>
                        <TransactionTypeButton
                            isActive={transactionType === 'up'}
                            type="up"
                            title="Income"
                            onPress={() => handleTransactionsTypeSelect('up')}
                        />
                        <TransactionTypeButton
                            isActive={transactionType === 'down'}
                            type="down"
                            title="Outcome"
                            onPress={() => handleTransactionsTypeSelect('down')}
                        />
                    </TransactionType>
                    <CategorySelectButton 
                        title={category.name}
                        onPress={handleOpenSelectCategoryModal}
                    />
                </Fields>
                <Button 
                    title="Enviar"
                    onPress={handleSubmit(handleRegister)}
                />
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect 
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>
        </Container>
    );
}