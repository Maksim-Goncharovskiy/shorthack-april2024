import './SignUpPage.css';
import React from 'react';


const SignUpPage = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12 reg-title"><h2>Регистрация ментора</h2></div>
            </div>
            <form class="form">
                <div class="form-group">
                    <label for="second-name-input">Фамилия</label>
                    <input class="form-control" id="second-name-input" placeholder="Введите фамилию" required/>
                </div>

                <div class="form-group">
                    <label for="first-name-input">Имя</label>
                    <input class="form-control" id="first-name-input" placeholder="Введите имя" required/>
                </div>

                <div class="form-group">
                    <label for="email-input">e-mail</label>
                    <input class="form-control" id="email-input" placeholder="Введите почту" required/>
                </div>

                <div class="form-group">
                    <label for="tg-input">Телеграмм</label>
                    <input class="form-control" id="tg-input" placeholder="Ваш тг" />
                </div>

                <div class="form-group">
                    <label for="checkbox">Выберите направления менторства:</label>
                    <div class="form-check" id="checkbox">
                        <label for="backend">Backend</label>
                        <input class="form-check-input" type="checkbox" id="backend"></input>
                    </div>
                    <div class="form-check" id="checkbox">
                        <label for="frontend">Frontend</label>
                        <input class="form-check-input" type="checkbox" id="frontend"></input>
                    </div>
                    <div class="form-check" id="checkbox">
                        <label for="Data Science">Data Science</label>
                        <input class="form-check-input" type="checkbox" id="Data Science"></input>
                    </div>
                    <div class="form-check" id="checkbox">
                        <label for="etc">etc.</label>
                        <input class="form-check-input" type="checkbox" id="etc"></input>
                    </div>
                </div>

                <div class="form-group">
                    <label for="tg-input">Напишите о себе, о своих требованиях к менти:</label>
                    <textarea class="form-control" id="description" rows="3" > </textarea>
                </div>


                <div class="form-group">
                    <label for="inputPassword">Пароль</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" required></input>
                    <button type="submit" class="btn btn-primary submit-btn">Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export {SignUpPage};