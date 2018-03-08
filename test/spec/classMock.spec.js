import SSO from '../../src/classMock/sso'
jest.mock('../../src/classMock/sso')
beforeEach(() => {
  SSO.mockClear()
})
describe('class mock', () => {
  it('test toHaveBeenCalled', () => {
    new SSO()
    expect(SSO).toHaveBeenCalledTimes(1)
  })
  it('test mockReturnValue', () => {
    const sso = new SSO()
    sso.getToken.mockReturnValue('XXXX')
    expect(sso.getToken()).toEqual('XXXX')
  })
})
