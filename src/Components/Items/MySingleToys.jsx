import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MySingleToys = ({data}) => {
    const {category, description, email, name, picture, price, quantity,
        rating, sellerName} = data;

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
                    fetch(`http://localhost:5000/delete/${id}`,{
            method : 'DELETE',
        })
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your toys has been deleted.',
                    'success'
                  )
            }
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
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><Link to={`/update/${data._id}`} className='bg-red-300 p-3 rounded-md hover:bg-lime-400 transition-all'>Update</Link></td>
        <td><button onClick={()=>handleDelete(data._id)} className='bg-red-300 p-3 rounded-md hover:bg-lime-400 transition-all'>Delete</button></td>
            
        </tr>
    );
};

export default MySingleToys;