import { createPortal } from "react-dom"
import Input from "./Input"
import Button from "./Button"
import { CSSTransition } from "react-transition-group"
import { useRef, useState, useEffect } from "react"
import "./AddTaskDialog.css"
import TimeSelect from "./TimeSelect"
import { v4 } from "uuid"

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [time, setTime] = useState("morning")
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [errors, setErrors] = useState([])
  const nodeRef = useRef()

  useEffect(() => {
    setTitle("")
    setTime("morning")
    setDescription("")
  }, [isOpen])

  const handleSaveClick = () => {
    const newErrors = []

    if (!title.trim()) {
      newErrors.push({ inputName: "title", message: "O título é obrigatório" })
    }
    if (!time.trim()) {
      newErrors.push({ inputName: "time", message: "O horário é obrigatório" })
    }
    if (!description.trim()) {
      newErrors.push({
        inputName: "description",
        message: "Descrição é obrigatório",
      })
    }

    setErrors(newErrors)

    if (newErrors.length > 0) {
      return
    }
    handleSubmit({
      id: v4(),
      title,
      description,
      time,
      status: "todo",
    })
    handleClose()
  }

  const titleError = errors.find((error) => error.inputName === "title")
  const timeError = errors.find((error) => error.inputName === "time")
  const descriptionError = errors.find(
    (error) => error.inputName === "description"
  )

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-xl font-semibold text-[#35383E]">
                Nova Tarefa
              </h2>
              <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
                Insira as informações abaixo
              </p>
              <div className="flex w-[336px] flex-col space-y-4">
                <Input
                  id="title"
                  placeholder="Insira o título da tarefa"
                  label="Título"
                  onChange={(event) => setTitle(event.target.value)}
                  error={titleError}
                />

                <TimeSelect
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  error={timeError}
                ></TimeSelect>

                <Input
                  id="description"
                  placeholder="Descreva a tarefa"
                  label="Descrição"
                  onChange={(event) => setDescription(event.target.value)}
                  error={descriptionError}
                />

                <div className="flex justify-center gap-3">
                  <Button
                    size="large"
                    className="w-full"
                    variant="secondary"
                    onClick={() => {
                      setErrors([])
                      handleClose()
                    }}
                  >
                    Cancelar
                  </Button>
                  <Button
                    size="large"
                    className="w-full"
                    onClick={handleSaveClick}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  )
}

export default AddTaskDialog
