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
  const nodeRef = useRef()

  useEffect(() => {
    setTitle("")
    setTime("")
    setDescription("")
  }, [isOpen])

  const handleSaveClick = () => {
    handleSubmit({
      id: v4(),
      title,
      description,
      time,
      status: "todo",
    })
    handleClose()
  }

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
                />
                <TimeSelect
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                ></TimeSelect>
                <Input
                  id="description"
                  placeholder="Descreva a tarefa"
                  label="Descrição"
                  onChange={(event) => setDescription(event.target.value)}
                />
                <div className="flex justify-center gap-3">
                  <Button
                    size="large"
                    className="w-full"
                    variant="secondary"
                    onClick={handleClose}
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
