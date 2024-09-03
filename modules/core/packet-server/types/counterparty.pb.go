// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: ibc/core/packetserver/v1/counterparty.proto

package types

import (
	fmt "fmt"
	_ "github.com/cosmos/gogoproto/gogoproto"
	proto "github.com/cosmos/gogoproto/proto"
	v2 "github.com/cosmos/ibc-go/v9/modules/core/23-commitment/types/v2"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// Counterparty defines the counterparty for a light client to implement IBC eureka protocol
// this value is stored under our side's channel ID. which we will use to write all packet messages
// sent to counterparty
type Counterparty struct {
	// the client identifier of the counterparty chain
	// client id of the counterparty stored on our chain
	ClientId string `protobuf:"bytes,1,opt,name=client_id,json=clientId,proto3" json:"client_id,omitempty"`
	// the key path used to store packet flow messages that the counterparty
	// will use to send to us.
	// ["ibc", "channel/channel-4"] => ["ibc", "channel/channel-4/port/transfer/sequence/1"]
	CounterpartyPacketPath v2.MerklePath `protobuf:"bytes,3,opt,name=counterparty_packet_path,json=counterpartyPacketPath,proto3" json:"counterparty_packet_path"`
}

func (m *Counterparty) Reset()         { *m = Counterparty{} }
func (m *Counterparty) String() string { return proto.CompactTextString(m) }
func (*Counterparty) ProtoMessage()    {}
func (*Counterparty) Descriptor() ([]byte, []int) {
	return fileDescriptor_e0c60a0709a0040c, []int{0}
}
func (m *Counterparty) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Counterparty) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Counterparty.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Counterparty) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Counterparty.Merge(m, src)
}
func (m *Counterparty) XXX_Size() int {
	return m.Size()
}
func (m *Counterparty) XXX_DiscardUnknown() {
	xxx_messageInfo_Counterparty.DiscardUnknown(m)
}

var xxx_messageInfo_Counterparty proto.InternalMessageInfo

func (m *Counterparty) GetClientId() string {
	if m != nil {
		return m.ClientId
	}
	return ""
}

func (m *Counterparty) GetCounterpartyPacketPath() v2.MerklePath {
	if m != nil {
		return m.CounterpartyPacketPath
	}
	return v2.MerklePath{}
}

func init() {
	proto.RegisterType((*Counterparty)(nil), "ibc.core.packetserver.v1.Counterparty")
}

func init() {
	proto.RegisterFile("ibc/core/packetserver/v1/counterparty.proto", fileDescriptor_e0c60a0709a0040c)
}

var fileDescriptor_e0c60a0709a0040c = []byte{
	// 281 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x90, 0x3f, 0x4b, 0xc3, 0x40,
	0x18, 0xc6, 0x73, 0x28, 0x62, 0xa3, 0x53, 0x11, 0x09, 0x15, 0xce, 0xd2, 0xc5, 0x82, 0xf4, 0x8e,
	0xd6, 0x49, 0x70, 0xd2, 0xc9, 0x41, 0x28, 0x1d, 0x1c, 0x5c, 0x42, 0xee, 0x72, 0x24, 0x47, 0x93,
	0xbc, 0xe1, 0xf2, 0xe6, 0xa0, 0x9f, 0x42, 0x3f, 0x56, 0xc7, 0x8e, 0x4e, 0x22, 0xc9, 0x17, 0x91,
	0x24, 0x52, 0x6e, 0xbb, 0x3f, 0x3f, 0x7e, 0xef, 0xf3, 0x3e, 0xfe, 0xbd, 0x16, 0x92, 0x4b, 0x30,
	0x8a, 0x97, 0x91, 0xdc, 0x2a, 0xac, 0x94, 0xb1, 0xca, 0x70, 0xbb, 0xe4, 0x12, 0xea, 0x02, 0x95,
	0x29, 0x23, 0x83, 0x3b, 0x56, 0x1a, 0x40, 0x18, 0x07, 0x5a, 0x48, 0xd6, 0xc1, 0xcc, 0x85, 0x99,
	0x5d, 0x4e, 0xae, 0x12, 0x48, 0xa0, 0x87, 0x78, 0x77, 0x1a, 0xf8, 0xc9, 0xdd, 0x51, 0x2e, 0x21,
	0xcf, 0x35, 0xe6, 0xaa, 0x40, 0x6e, 0x57, 0xce, 0x6d, 0x00, 0x67, 0x9f, 0xc4, 0xbf, 0x7c, 0x71,
	0xe6, 0x8d, 0x6f, 0xfc, 0x91, 0xcc, 0xb4, 0x2a, 0x30, 0xd4, 0x71, 0x40, 0xa6, 0x64, 0x3e, 0xda,
	0x9c, 0x0f, 0x0f, 0xaf, 0xf1, 0x58, 0xf8, 0x81, 0x1b, 0x2e, 0x1c, 0xc2, 0x84, 0x65, 0x84, 0x69,
	0x70, 0x32, 0x25, 0xf3, 0x8b, 0xd5, 0x8c, 0x1d, 0x93, 0x3a, 0xb3, 0xec, 0x8a, 0xbd, 0x29, 0xb3,
	0xcd, 0xd4, 0x3a, 0xc2, 0xf4, 0xf9, 0x74, 0xff, 0x73, 0xeb, 0x6d, 0xae, 0x5d, 0xd3, 0xba, 0x17,
	0xf5, 0xbf, 0xef, 0xfb, 0x86, 0x92, 0x43, 0x43, 0xc9, 0x6f, 0x43, 0xc9, 0x57, 0x4b, 0xbd, 0x43,
	0x4b, 0xbd, 0xef, 0x96, 0x7a, 0x1f, 0x4f, 0x89, 0xc6, 0xb4, 0x16, 0x9d, 0x98, 0x4b, 0xa8, 0x72,
	0xa8, 0xb8, 0x16, 0x72, 0x91, 0x00, 0xb7, 0x8f, 0x3c, 0x87, 0xb8, 0xce, 0x54, 0xe5, 0x36, 0xba,
	0xf8, 0xaf, 0x14, 0x77, 0xa5, 0xaa, 0xc4, 0x59, 0xbf, 0xf0, 0xc3, 0x5f, 0x00, 0x00, 0x00, 0xff,
	0xff, 0x71, 0xdd, 0x46, 0x83, 0x78, 0x01, 0x00, 0x00,
}

func (m *Counterparty) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Counterparty) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Counterparty) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.CounterpartyPacketPath.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintCounterparty(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	if len(m.ClientId) > 0 {
		i -= len(m.ClientId)
		copy(dAtA[i:], m.ClientId)
		i = encodeVarintCounterparty(dAtA, i, uint64(len(m.ClientId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintCounterparty(dAtA []byte, offset int, v uint64) int {
	offset -= sovCounterparty(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Counterparty) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.ClientId)
	if l > 0 {
		n += 1 + l + sovCounterparty(uint64(l))
	}
	l = m.CounterpartyPacketPath.Size()
	n += 1 + l + sovCounterparty(uint64(l))
	return n
}

func sovCounterparty(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCounterparty(x uint64) (n int) {
	return sovCounterparty(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Counterparty) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCounterparty
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Counterparty: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Counterparty: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ClientId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCounterparty
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCounterparty
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCounterparty
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ClientId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CounterpartyPacketPath", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCounterparty
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthCounterparty
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCounterparty
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.CounterpartyPacketPath.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCounterparty(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCounterparty
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipCounterparty(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCounterparty
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowCounterparty
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowCounterparty
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthCounterparty
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCounterparty
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCounterparty
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCounterparty        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCounterparty          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCounterparty = fmt.Errorf("proto: unexpected end of group")
)
