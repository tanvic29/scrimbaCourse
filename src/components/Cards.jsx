import React from 'react'

function Card(props) {
  return (
    <div className='Card'>
        <img src={props.img} className='card--photo'/>
        <div className='card--stats'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAAB5CAMAAAC+7hXMAAAAmVBMVEX////+AAD6AAD8///3AAD9aWn7//3+//35///9f3/8ZWj9+vr8e3v8ZGP6+/r7zsv68/H85+b7sKr74OD7LSz88PD8q6/6T0/5Ghn/+vT9qaj6xMH8eXb6lJP64t78HiD6Tkj5urv819n8Vlf7jZD6t7P2PDr7o5z7NjL5m5r8j4j6r6/3Gg36Xln2gXv8SET2bGX72tT7bHEE3ed5AAADuElEQVR4nO2a+3OiMBDHk90U0kMBH9zZguKjWuuz+v//cRfQKtwpWNu5JDf7mfEHR5zZL/vKJmGMIAiCIAiCIAiCIAiCIP4nXEe3Bd+Cj7ot+DoYtj3dNnwDnW6k24Rv4KcIdJvwZRB/QYPZnuCy1ePdJ9vzG58BIEa7ZTh+wjnv2y2CsUHKOQwju2XgCJQv+NhuFWySqYAXu1U8Qa6iK3Ub8gVcNhW5ChjrNuV+0MUk9wWHvkRXtzl305kdVPB1aG9mOCN+VLGyt0ohS/gHr/aqkCcRMLc3LwJxUiFC3cbci6pQJ2fwN93W3InbGopzSDV93fbcBbIYTr4Ano7RxllJ4oKfIwpgyWwsU66zKqhQjU/aWKVwXNSgsHJuxU1ZBbSNVeGfJ2rMKMT+07bsCt68okL9ydNbwOLkMafRaCQZ+4cDzWZz0hNlX6QPJX4cUY+uJ7FWP+E0hQz+NyCg8vv5Bz4L9AYb4m4Igl+x7yYA3lu6d3okw7ceiHpjr4pIl8gc3RvSLmLchTu9oUJxZsrkgaEaTO9xh0qVjTnLEvSnFxO8VsVq5JjU0GVn/VkdqmQ1B7rtLoPoP34ypgBepNSd1SUQPZXk6adUpAHqLrCXwGgPV1vbH8EEIolM1MCyJH++reKqgvbmGypCgSrJeV2aAxeTnep0JlWnMjJq1MWUyKJJt53VeC4G3RpXpLENs+tuXdHIBQzH0gIVDuL7VRUACZrVJK7hyG2FLxLp2XAkg2xQUaWAexbEU+aK1+sqVFcc2bCjg473UOULeLRBhcs61eupbcuGiMJlpQgOevc7bgSHNSoSG1SEdcuongUqcFmzGgQw/taXes3FAySe7bip5V9RGIgNM71K4WBeNrm3xH7ZO2IYGd69UY7KJm8DlBiXlHERGH7g6mKjaC5Pssu0rgz3pWVu33AVTrFCwep41U4tc6dFFXPTLwrHcMxqte5Tc+nBWvXm5XhyTnIYmK3i44hblaZV38dC5KDTX522cxdmq4hmH6+7l0VTYR5C34nTj3Abmj0o5UfcWYu4uEEQNg7eED3Nxy6V4PGIW8Czd8FMRK99uIHHXw1ufG40z2NmvSsF0/l3xFbzEFKhuSpwnE9z++vXZx0MF/mGVcfckJIbZV86qrrwoSItyBxm7nVndOZ5k6h6JPu0Eg5bY1WwQMDCrd9FRtleid2/MOgu+mksnfqX7KLcDY299RUuWrc+itHU1Mbn3b7I825wmSZc7+ZjX2M1EARBEARBEARBEARBEEQ9vwHVKisPv3HGFgAAAABJRU5ErkJggg==" className='card--star'/>
            <span >
              {props.rating} </span>
            <span className='gray'>({props.reviewCnt}) . </span>
            <span className='gray'>{props.country}</span>
        </div>
        <p className='cards--title'>{props.title}</p>
        <p><span className='bold'>from ${props.price} bucks</span>/person</p>
    </div>
  )
}

export default Card