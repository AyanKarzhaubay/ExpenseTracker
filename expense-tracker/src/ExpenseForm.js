import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseForm = () => {
    const [date, setDate] = useState('');
    const [sum, setSum] = useState('');
    const [category, setCategory] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const expenseData = { date, sum, category, comment };

        try {
            const response = await fetch('http://localhost:3001/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(expenseData),
            });

            if (!response.ok) {
                throw new Error('Ошибка при отправке данных');
            }

            alert('Данные успешно отправлены!');
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-5">
            <div className="form-group">
                <label htmlFor="date">Дата</label>
                <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="sum">Сумма</label>
                <input
                    type="number"
                    className="form-control"
                    id="sum"
                    value={sum}
                    onChange={(e) => setSum(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="category">Категория</label>
                <select
                    className="form-control"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Выберите категорию</option>
                    <option value="Food">Еда</option>
                    <option value="Transport">Транспорт</option>
                    <option value="Entertainment">Развлечения</option>
                    <option value="Entertainment">Прочее</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="comment">Комментарий</label>
                <textarea
                    className="form-control"
                    id="comment"
                    rows="3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Send
            </button>
        </form>
    );
};

export default ExpenseForm;
