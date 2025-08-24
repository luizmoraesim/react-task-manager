import Button from "./Button"
import { AddIcon, TrashIcon } from "../assets/icons/index"

function Tasks() {
  return (
    <div className="w-full px-8 py-16">
      <div className="w-fullß flex justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefas
            <TrashIcon />
          </Button>
          <Button variant="primary">
            Nova tarefa
            <AddIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Tasks
