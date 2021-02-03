'use strict'

const Helpers = use('Helpers')

class FileController {
  async index ({ request }) {
    const files = request.group.files().fetch()

    return files
  }

  async show ({ params, request, response }) {
    const file = await request.group.files().where('file_id', params.id).first()

    if (file) {
      return response.download(Helpers.tmpPath(`uploads/${file.file}`))
    }

    return response
      .status(404)
      .send({ error: { message: 'Does not have a file for this id' } })
  }

  async store ({ request, response, auth }) {
    try {
      if (!request.file('file')) return

      const upload = request.file('file', { size: '5mb' })

      const fileName = `${Date.now()}.${upload.subtype}`

      await upload.move(Helpers.tmpPath('uploads'), { name: fileName })

      if (!upload.moved()) {
        let message
        if (upload.error().type === 'size') message = 'Arquivo muito grande'
        else message = 'Erro ao processar arquivo'
        return response.status(400).send({ error: { message } })
      }

      try {
        const file = request.group.files().create({
          file: fileName,
          name: upload.clientName,
          group_id: auth.user.currentGroup,
          type: upload.type,
          subtype: upload.subtype
        })

        return file
      } catch (err) {
        console.log(err)
        return response
          .status(err.status)
          .send({ error: { message: 'Erro no upload de arquivo' } })
      }
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro no upload de arquivo' } })
    }
  }

  async destroy ({ params }) {

  }
}

module.exports = FileController
