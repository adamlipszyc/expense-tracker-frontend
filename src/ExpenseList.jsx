import React from 'react';
import TrackingItem from './TrackingItem';
import List from '@mui/material/List';


const ExpenseList = ( {expenses, categories, handleDeleteExpense} ) => {

    return (
        <div className='expense-list-container'>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {expenses.filter((expense) => { if (categories.size == 0) {
                        return true;
                    } else {
                        return categories.has(expense.category)
                    }
                    }).map((expense) =>               
                    (<TrackingItem 
                        id={expense.id} 
                        category={expense.category} 
                        amount={expense.amount} 
                        date={expense.date} 
                        description={expense.description} 
                        handleDeleteExpense={handleDeleteExpense}/>)
                )}
            
            </List>
        </div>
    );
}

export default ExpenseList;

