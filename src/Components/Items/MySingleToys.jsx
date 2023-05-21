import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MySingleToys = (props) => {
  const {data, setValue, setItems} = props
    const {category, description, email, name, picture, price, quantity,
        rating, sellerName} = data;
const singleData = props.items
const singleDatas = props.value
        const handleDelete = id =>{
          
          
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
              })
              
              swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://assignment-11-rho.vercel.app/delete/${id}`,{
            method : 'DELETE',
        })
        .then(data =>{
            console.log(data)
              const  result =  singleData.filter(item =>
                item._id !== id
              );
              setItems(result)
              const  results =  singleDatas.filter(item =>
                item._id !== id
              );
              setValue(results)
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your toys has been deleted.',
                    'success'
                  );
                 
                  
            
        })
                
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                  )
                }
              })
        }
    return (
        <tr>
            {
                sellerName? <td>{sellerName}</td>: ''
            }
            <td><img src={picture} alt="" /></td>
            <td>{email}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>
        <td>{description}</td>
        <td><Link to={`/update/${data._id}`} className='bg-red-300 p-3 rounded-md hover:bg-lime-400 transition-all'>Update</Link></td>
        <td><button onClick={()=>handleDelete(data._id)} className='bg-red-300 p-3 rounded-md hover:bg-lime-400 transition-all'>Delete</button></td>
            
        </tr>
    );
};

export default MySingleToys;