import {
  ChurrasContainer,
  GuestsContainer,
  CardContainer,
  NewChurrasContainer,
  ButtonContainer,
} from "./styles";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { Footer } from "../../components/Layout/Footer";
import { DatePickerField } from "../../components/UI/DatePicker";
import { useContext } from "react";
import { ChurrasContext } from "../../store/ChurrasProvider";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import nextId from "react-id-generator";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { UserPlus, UserMinus } from "phosphor-react";

interface Churrasco {
  id: number;
  name: string;
  day: number | Date;
  valueWithDrinks: number;
  valueWithoutDrinks: number;
  comments: string;
  createdAt: Date;
  guests: [
    {
      guestId: string;
      name: string;
      value: number;
      isPayed: boolean;
    }
  ];
}

export default function NewChurrasEvent() {
  const { addChurras } = useContext(ChurrasContext);

  const navigate = useNavigate();

  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const initialValues = {
    id: getRandomArbitrary(1, 20),
    name: "",
    day: null,
    valueWithDrinks: null,
    valueWithoutDrinks: null,
    comments: "",
    createdAt: null,
    guests: [
      {
        guestId: nextId(),
        name: "",
        value: null,
        isPayed: false,
      },
    ],
  };

  function onSubmitForm(values: Churrasco) {
    if (window.confirm("Você deseja criar o evento do churrasco?")) {
      addChurras({
        ...values,
        day: format(values.day, "dd/MM/yyyy"),
        createdAt: new Date(),
      });
      navigate("/agenda");
    } else {
      return;
    }
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Nome obrigatório"),
    day: Yup.date().required("Data obrigatória").nullable(),
    guests: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        value: Yup.number().required("Valor obrigatório").nullable(),
      })
    ),
  });

  return (
    <NewChurrasContainer>
      <CardContainer>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={async (values: Churrasco) => {
            await onSubmitForm(values);
          }}
        >
          {({ values }) => (
            <Form>
              <ChurrasContainer>
                <div className="basicInformationContainer">
                  <label htmlFor="name">Nome do Churras:</label>
                  <Field
                    className="nomeChurras"
                    type="text"
                    id={`name`}
                    name={`name`}
                    placeholder="ex: Churras de aniversário"
                  />
                  <ErrorMessage
                    name={`name`}
                    component="div"
                    className="nameFieldError"
                  />
                </div>

                <div className="basicInformationContainer">
                  <label htmlFor="day">Dia do Churras:</label>
                  <DatePickerField name={`day`} />
                  <ErrorMessage
                    name={`day`}
                    component="div"
                    className="dateFieldError"
                  />
                </div>
                <div className="suggestedValueContainer">
                  <div className="lineContainer">
                    <label htmlFor="valueWithDrinks">Valor com bebida:</label>
                    <Field
                      className="valueWithDrinks"
                      type="number"
                      id={`valueWithDrinks`}
                      name={`valueWithDrinks`}
                      placeholder="10,00"
                      min={0}
                    />
                  </div>
                  <div className="lineContainer">
                    <label htmlFor="valueWithoutDrinks">
                      Valor sem bebida:
                    </label>
                    <Field
                      className="valueWithoutDrinks"
                      type="number"
                      id={`valueWithoutDrinks`}
                      name={`valueWithoutDrinks`}
                      placeholder="10,00"
                      min={0}
                    />
                  </div>
                </div>
                <div className="commentsContainer">
                  <label htmlFor="comments">Observações do churras</label>
                  <Field
                    as="textarea"
                    className="comments"
                    id={`comments`}
                    name={`comments`}
                    placeholder="observações..."
                  />
                </div>
              </ChurrasContainer>

              <GuestsContainer>
                <span>Participantes:</span>

                <FieldArray name="guests">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.guests.length > 0 &&
                        values.guests.map((friend, index) => (
                          <div className="row guest" key={index}>
                            <div className="col">
                              <label htmlFor={`guests.${index}.name`}>
                                Nome:
                              </label>
                              <Field
                                name={`guests.${index}.name`}
                                type="text"
                                className="inputField name"
                              />
                            </div>
                            <div className="col">
                              <label htmlFor={`guests.${index}.value`}>
                                Valor:
                              </label>
                              <Field
                                name={`guests.${index}.value`}
                                type="number"
                                className="inputField value"
                                min={0}
                              />
                            </div>
                            <div className="col">
                              {index > 0 && (
                                <button
                                  type="button"
                                  className="deleteGuest"
                                  onClick={
                                    index > 0 ? () => remove(index) : undefined
                                  }
                                >
                                  <UserMinus size={24} className="icon" />
                                </button>
                              )}
                            </div>
                            <ErrorMessage
                              name={`guests.${index}.name`}
                              component="div"
                              className="nameFieldError"
                            />
                            <ErrorMessage
                              name={`guests.${index}.value`}
                              component="div"
                              className="valueFieldError"
                            />
                          </div>
                        ))}

                      <button
                        type="button"
                        className="secondary addGuestBtn"
                        onClick={() =>
                          push({
                            guestId: nextId(),
                            name: "",
                            value: "",
                            isPayed: false,
                          })
                        }
                      >
                        <UserPlus size={28} />
                      </button>
                    </div>
                  )}
                </FieldArray>
              </GuestsContainer>
              <ButtonContainer>
                <Link to="/agenda">
                  <button className="returnButton">Voltar</button>
                </Link>
                <button type="submit" className="addChurrastButton">
                  Adicionar Churras
                </button>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </CardContainer>
      <Footer />
    </NewChurrasContainer>
  );
}
