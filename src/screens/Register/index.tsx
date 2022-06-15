import React, { useState } from "react";
import { Input, Button, TransactionTypeButton } from "../../components";
import { 
    Container, 
    Header,
    Title,
    Form,
    Fields,
    TransactionType
} from "./styles";

export function Register() {
    const [transactionType, setTransactionType] = useState('');

    function handleTransactionsTypeSelect(type: 'up' | 'down'){
        setTransactionType(type);
    }

    return(
        <Container>

            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input 
                        placeholder="Nome"
                    />
                    <Input 
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
                </Fields>
                <Button title="Enviar"/>
            </Form>
        </Container>
    );
}