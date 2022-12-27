import { Request, Response, NextFunction } from 'express'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.statusCode) {
    const { statusCode, message } = err
    res.status(statusCode).json({ message })
    return next()
  }
  console.log(err)
  return res.status(500).json({ message: 'internal error' })
}
